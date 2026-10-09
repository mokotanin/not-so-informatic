use gpui::prelude::FluentBuilder;
use gpui::*;

const BACKGROUND_COLOR: u32 = 0x1e1e2e;
const FOREGROUND_COLOR: u32 = 0xf5e0dc;
const BUTTON_BACKGROUND_COLOR: u32 = 0x313244;
const BUTTON_FOREGROUND_COLOR: u32 = 0xcdd6f4;
const BUTTON_HOVER_COLOR: u32 = 0x45475a;

#[derive(IntoElement)]
struct Button {
    id: ElementId,
    label: SharedString,
    on_click: Option<Box<dyn Fn(&ClickEvent, &mut Window, &mut App) + 'static>>,
}

impl Button {
    fn new(id: impl Into<ElementId>, label: SharedString) -> Self {
        Button {
            id: id.into(),
            label,
            on_click: None,
        }
    }

    fn on_click(mut self, handler: impl Fn(&ClickEvent, &mut Window, &mut App) + 'static) -> Self {
        self.on_click = Some(Box::new(handler));
        self
    }
}

impl RenderOnce for Button {
    fn render(self, _window: &mut Window, _cx: &mut App) -> impl IntoElement {
        let Button {
            id,
            label,
            on_click,
        } = self;

        div()
            .id(id)
            .flex()
            .justify_center()
            .items_center()
            .text_xl()
            .px_4()
            .py_2()
            .rounded_md()
            .text_color(rgb(BUTTON_FOREGROUND_COLOR))
            .bg(rgb(BUTTON_BACKGROUND_COLOR))
            .hover(|style| style.bg(rgb(BUTTON_HOVER_COLOR)))
            .when_some(on_click, |this, on_click| this.on_click(on_click))
            .child(label)
    }
}

struct Person {
    first_name: SharedString,
    last_name: SharedString,
    likes: u16,
}

impl Person {
    fn render_name(&self) -> impl IntoElement {
        div()
            .flex()
            .flex_col()
            .bg(rgb(BACKGROUND_COLOR))
            .justify_center()
            .items_center() // ← centré
            .text_2xl()
            .text_color(rgb(FOREGROUND_COLOR))
            .child(format!("{} {}", &self.first_name, &self.last_name))
    }

    fn render_likes(&self) -> impl IntoElement {
        div()
            .flex()
            .justify_center()
            .items_center()
            .text_xl()
            .text_color(rgb(FOREGROUND_COLOR))
            .child(format!("Likes: {}", self.likes))
    }

    fn handle_increment(
        &mut self,
        _event: &ClickEvent,
        _window: &mut Window,
        cx: &mut Context<Self>,
    ) {
        self.likes += 1;
        cx.notify();
    }
}

impl Render for Person {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .flex()
            .flex_col()
            .bg(rgb(BACKGROUND_COLOR))
            .size_full()
            .justify_center()
            .items_center() // ← AJOUT : centre sur l'axe horizontal
            .gap_2()
            .text_xl()
            .child(self.render_name())
            .child(self.render_likes())
            .child(
                Button::new("like-button", "Like".into())
                    .on_click(cx.listener(Self::handle_increment)),
            )
    }
}

fn main() {
    Application::with_platform(gpui_platform::current_platform(false)).run(|cx: &mut App| {
        cx.open_window(WindowOptions::default(), |_, cx| {
            cx.new(|_| Person {
                first_name: "Christian".into(),
                last_name: "Hypertext Preprocessor".into(),
                likes: 0,
            })
        })
        .unwrap();
    });
}
