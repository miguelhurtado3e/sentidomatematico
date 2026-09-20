---
description: Hace git add commit push 100 por ciento fiel en el repo único
agent: build
---

Sube el 100 por ciento de los cambios SIN omitir archivos. Esta carpeta ES el repo (repo único, sin copia Fenómeno→Página). Ejecuta exactamente estos pasos con bash, sin preguntar:

1. Muestra estado y diff en esta carpeta:
```
git status
git diff --stat
git diff
```

2. Si hay cambios, haz git add ., genera mini descripcion (1 linea, estilo Avances.txt) basada en el diff real y haz:
```
git add .
git commit -m "<mini descripcion generada>"
git push origin main
```

3. Verifica con git log --oneline -3 y git status que quedo limpio y pusheado a origin/main.

No omitas archivos: siempre sube todo con fidelidad 100 por ciento.
