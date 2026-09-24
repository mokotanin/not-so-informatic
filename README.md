<p align="center">
    <img src="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/refs/heads/master/PHP/Original_by_Tkimz_Php_Programming_Book.png" width="650"><br>
    petite trace des prémices <b>sombres</b> de la programmation<br>
</p>

# Not So Informatic

25-26 première </br>
26-27 terminale (tle)

> [!TIP]
> créez un environnement virtuel avant d'installer les dépendances
>
> ```bash
> python -m venv .venv
> ```

## dépendances

> [!IMPORTANT]
> les dépendances se trouvent dans les README de chaque séance

## side projects personnel que je sais pas où mettre

- [crabe](./crabe/)

## Application web NSI

Le dépôt inclut un explorateur de ressources réalisé avec React 18, Vite, Tailwind CSS v4 et les composants shadcn/ui.

Pour créer un projet équivalent depuis zéro :

```bash
npm create vite@latest nsi-explorer -- --template react
cd nsi-explorer
npm install
npm install react@^18.3.1 react-dom@^18.3.1 react-router-dom lucide-react tailwindcss @tailwindcss/vite
npx shadcn@latest init
npx shadcn@latest add breadcrumb button collapsible input scroll-area sheet
npm run dev
```

Dans ce dépôt, les composants shadcn/ui requis sont déjà présents et configurés. Pour lancer l’application :

```bash
npm install
npm run dev
```

Vite affiche ensuite l’adresse locale dans le terminal.
