use crate::exceptions::Error;
use chrono::{DateTime, NaiveDate, NaiveDateTime, NaiveTime, Utc};
use serde::{Deserialize, Serialize};
use serde_json::Value;

pub mod util {
    use super::*;
    pub fn value(v: &Value) -> String {
        v.get("V")
            .or_else(|| v.get("L"))
            .and_then(Value::as_str)
            .unwrap_or_default()
            .into()
    }
    pub fn date_parse(v: &str) -> Result<NaiveDate, Error> {
        NaiveDate::parse_from_str(v, "%d/%m/%Y").map_err(|e| Error::Date(e.to_string()))
    }
    pub fn datetime_parse(v: &str) -> Result<DateTime<Utc>, Error> {
        for fmt in ["%d/%m/%Y %H:%M", "%d/%m/%Y %H:%M:%S", "%Y-%m-%dT%H:%M:%S"] {
            if let Ok(d) = NaiveDateTime::parse_from_str(v, fmt) {
                return Ok(d.and_utc());
            }
        }
        Err(Error::Date(format!("invalid datetime: {v}")))
    }
    pub fn time_parse(v: &str) -> Option<NaiveTime> {
        NaiveTime::parse_from_str(v, "%H:%M").ok()
    }
    pub fn grade_parse(v: &str) -> String {
        v.replace(',', ".")
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Object {
    pub raw: Value,
    pub id: Option<String>,
    pub label: Option<String>,
}
impl Object {
    pub fn new(raw: &Value) -> Self {
        Self {
            id: raw.get("N").and_then(Value::as_str).map(str::to_owned),
            label: raw.get("L").and_then(Value::as_str).map(str::to_owned),
            raw: raw.clone(),
        }
    }
    pub fn to_dict(&self) -> &Value {
        &self.raw
    }
}

macro_rules! object_type {
    ($name:ident) => {
        #[derive(Debug, Clone, Serialize, Deserialize, Default)]
        pub struct $name {
            pub object: Object,
        }
        impl $name {
            pub fn new(v: &Value) -> Self {
                Self {
                    object: Object::new(v),
                }
            }
        }
    };
}
object_type!(Subject);
object_type!(Report);
object_type!(Absence);
object_type!(Delay);
object_type!(Average);
object_type!(Attachment);
object_type!(Acquisition);
object_type!(Evaluation);
object_type!(Identity);
object_type!(Guardian);
object_type!(Student);
object_type!(StudentClass);
object_type!(Punishment);
object_type!(TeachingStaff);
object_type!(Recipient);
object_type!(Message);

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Grade {
    pub object: Object,
    pub grade: Option<String>,
    pub out_of: Option<String>,
    pub min: Option<String>,
    pub max: Option<String>,
    pub coefficient: Option<String>,
    pub comment: Option<String>,
    pub average: Option<String>,
    pub is_bonus: bool,
    pub is_optionnal: bool,
    pub is_out_of_20: bool,
}
impl Grade {
    pub fn new(v: &Value) -> Self {
        let s = |k| v.get(k).map(util::value).filter(|x| !x.is_empty());
        Self {
            object: Object::new(v),
            grade: s("note"),
            out_of: s("bareme").or_else(|| s("baremeParDefaut")),
            min: s("noteMin"),
            max: s("noteMax"),
            coefficient: s("coefficient"),
            comment: s("commentaire"),
            average: s("moyenne"),
            is_bonus: v.get("estBonus").and_then(Value::as_bool).unwrap_or(false),
            is_optionnal: v
                .get("estFacultatif")
                .and_then(Value::as_bool)
                .unwrap_or(false),
            is_out_of_20: v
                .get("estRamenerSur20")
                .and_then(Value::as_bool)
                .unwrap_or(false),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Period {
    pub object: Object,
    pub name: Option<String>,
    pub grades: Vec<Grade>,
    pub averages: Vec<Average>,
    pub evaluations: Vec<Evaluation>,
    pub absences: Vec<Absence>,
    pub delays: Vec<Delay>,
    pub punishments: Vec<Punishment>,
}
impl Period {
    pub fn new(v: &Value) -> Self {
        let arr = |k| {
            v.get(k)
                .and_then(Value::as_array)
                .cloned()
                .unwrap_or_default()
        };
        Self {
            object: Object::new(v),
            name: v.get("L").and_then(Value::as_str).map(str::to_owned),
            grades: arr("listeNotes").iter().map(Grade::new).collect(),
            averages: arr("listeMoyennes").iter().map(Average::new).collect(),
            evaluations: arr("listeEvaluations")
                .iter()
                .map(Evaluation::new)
                .collect(),
            absences: arr("listeAbsences").iter().map(Absence::new).collect(),
            delays: arr("listeRetards").iter().map(Delay::new).collect(),
            punishments: arr("listePunitions").iter().map(Punishment::new).collect(),
        }
    }
    pub fn overall_average(&self) -> Option<String> {
        self.object
            .raw
            .get("moyenneGenerale")
            .map(util::value)
            .filter(|v| !v.is_empty())
    }
    pub fn class_overall_average(&self) -> Option<String> {
        self.object
            .raw
            .get("moyenneClasse")
            .map(util::value)
            .filter(|v| !v.is_empty())
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Lesson {
    pub object: Object,
    pub subject: Option<String>,
    pub teacher: Option<String>,
    pub start: Option<DateTime<Utc>>,
    pub end: Option<DateTime<Utc>>,
    pub homework: Option<String>,
}
impl Lesson {
    pub fn new(v: &Value) -> Self {
        Self {
            object: Object::new(v),
            subject: v.get("matiere").map(util::value),
            teacher: v.get("prof").map(util::value),
            start: v
                .get("date")
                .and_then(Value::as_str)
                .and_then(|x| util::datetime_parse(x).ok()),
            end: None,
            homework: v.get("contenu").map(util::value),
        }
    }
    pub fn normal(&self) -> bool {
        self.object.raw.get("annule").and_then(Value::as_bool) != Some(true)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Homework {
    pub object: Object,
    pub date: Option<NaiveDate>,
    pub content: Option<String>,
    pub done: bool,
}
impl Homework {
    pub fn new(v: &Value) -> Self {
        Self {
            object: Object::new(v),
            date: v
                .get("date")
                .map(util::value)
                .and_then(|x| util::date_parse(&x).ok()),
            content: v.get("description").map(util::value),
            done: v.get("fait").and_then(Value::as_bool).unwrap_or(false),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Menu {
    pub object: Object,
    pub date: Option<NaiveDate>,
    pub meal: Option<String>,
}
impl Menu {
    pub fn new(v: &Value) -> Self {
        Self {
            object: Object::new(v),
            date: v
                .get("date")
                .map(util::value)
                .and_then(|x| util::date_parse(&x).ok()),
            meal: v.get("libelle").map(util::value),
        }
    }
    pub fn is_lunch(&self) -> bool {
        self.object.raw.get("type").map(util::value).as_deref() == Some("Déjeuner")
    }
    pub fn is_dinner(&self) -> bool {
        self.object.raw.get("type").map(util::value).as_deref() == Some("Dîner")
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct ClientInfo {
    pub object: Object,
    pub name: String,
    pub class_name: Option<String>,
    pub establishment: Option<String>,
    pub email: Option<String>,
    pub phone: Option<String>,
}
impl ClientInfo {
    pub fn new(v: &Value) -> Self {
        Self {
            object: Object::new(v),
            name: v
                .get("nom")
                .or_else(|| v.get("prenom"))
                .map(util::value)
                .unwrap_or_default(),
            class_name: v.get("classe").map(util::value),
            establishment: v.get("etablissement").map(util::value),
            email: v.get("email").map(util::value),
            phone: v.get("telephone").map(util::value),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Discussion {
    pub object: Object,
    pub closed: bool,
    pub messages: Vec<Message>,
}
impl Discussion {
    pub fn new(v: &Value) -> Self {
        Self {
            object: Object::new(v),
            closed: v.get("estFerme").and_then(Value::as_bool).unwrap_or(false),
            messages: v
                .get("listeMessages")
                .and_then(Value::as_array)
                .map(|a| a.iter().map(Message::new).collect())
                .unwrap_or_default(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn grade_accepts_missing_optional_fields() {
        let grade = Grade::new(&serde_json::json!({"note":{"V":"15"}, "bareme":{"V":"20"}}));
        assert_eq!(grade.grade.as_deref(), Some("15"));
        assert_eq!(grade.out_of.as_deref(), Some("20"));
        assert!(grade.max.is_none());
        assert!(!grade.is_bonus);
    }
}
