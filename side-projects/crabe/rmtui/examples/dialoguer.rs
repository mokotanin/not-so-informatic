use dialoguer::{theme::SimpleTheme, Select};
use console::{style, Term};

fn main() -> std::io::Result<()> {
    // 1. Définition de la liste des choix
    let items = vec!["Apple", "Banana", "Orange"];

    // 2. Création d'un thème personnalisé
    // On surcharge le style de l'item sélectionné pour l'afficher en vert
    let mut theme = SimpleTheme;

    println!("{}", style("Select an item (up/down to select and enter to confirm):").bold());

    // 3. Configuration et affichage du menu
    // Note : Pour changer finement les couleurs de sélection de dialoguer,
    // on peut utiliser sa structure de thème par défaut ou styliser directement les chaînes.
    let selection = Select::with_theme(&theme)
        .items(&items)
        .default(0) // Positionne le curseur sur le premier élément par défaut
        .interact_on(&Term::stderr())?;

    // 4. Traitement du résultat
    println!("\nYou selected: {}", style(items[selection]).green().bold());

    Ok(())
}
