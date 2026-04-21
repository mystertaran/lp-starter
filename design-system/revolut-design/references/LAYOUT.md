# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `4, 8, 10, 12, 16, 18, 20, 24, 26, 32, 34, 36, 40, 48, 56` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `footer.Box-rui__sc-1g1k12l-0.cQFxcA` | column | — | — | — | 7 |
| `section#d7935e2a-c366-4f3c-b85a-889d6967ad40.Box-rui__sc-1g1` | row | center | — | — | 1 |
| `section#e7a957ad-b891-4afa-bafe-6cb1eea2ec02.Box-rui__sc-1g1` | row | center | — | — | 3 |
| `section#25c59cb0-f8e8-454a-8b59-daa3df89bfee.Box-rui__sc-1g1` | row | center | — | — | 4 |
| `section#f85a3566-de16-46d6-8408-83754f1f5a94.Box-rui__sc-1g1` | row | center | — | — | 1 |
| `section.Box-rui__sc-1g1k12l-0.cQFxcA` | column | center | — | 24px | 2 |
| `section.Box-rui__sc-1g1k12l-0.cQFxcA` | column | center | center | — | 3 |

## Structural Containers

### `<header>` (`header.Box-rui__sc-1g1k12l-0.sc-39771f03-0`)

```
display:          block
children:         1
```

### `<main>` (`main.Box-rui__sc-1g1k12l-0.Position-rui__sc-nh2ik7-0`)

```
display:          block
max-width:        100%
children:         8
```

### `<footer>` (`footer.Box-rui__sc-1g1k12l-0.cQFxcA`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
padding:          40px 220px
children:         7
```

### `<section>` (`section#24b6c305-36ff-4886-aeee-8c47f38a1369.Box-rui__sc-1g1`)

```
display:          block
children:         1
```

### `<section>` (`section#7de98943-92c4-4e70-9e2b-6944c4773cb7.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#555d9fc5-8b62-4cf0-b16a-0f4ad21cfa42.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#d7935e2a-c366-4f3c-b85a-889d6967ad40.Box-rui__sc-1g1`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      —
children:         1
```

### `<section>` (`section#dbfef89c-d350-446d-b9dc-6f86320453f6.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#f3ff6372-53a2-43d5-b3ff-8d1a14f1e5d2.Box-rui__sc-1g1`)

```
display:          block
padding:          0px 0px 120px
max-width:        1000px
children:         1
```

### `<section>` (`section#45f4d4d8-fef6-46c7-b4b7-2fac5beaad69.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#0ccc8c70-b8ff-40f3-ae78-3b0491e47ab4.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

### `<section>` (`section#bfac11be-4608-4f98-af14-eb4f8bf585f6.Box-rui__sc-1g1`)

```
display:          block
max-width:        1000px
children:         1
```

## Layout Rules

- **Container max-width:** `100%` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

