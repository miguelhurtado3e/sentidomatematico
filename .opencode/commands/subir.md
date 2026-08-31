---
description: Sincroniza Fenomeno a repo y hace git add commit push 100 por ciento fiel
agent: build
---

Sincroniza y sube el 100 por ciento de los cambios SIN omitir archivos. Ejecuta exactamente estos pasos con bash, sin preguntar:

1. Copia FIEL de Fenomeno al repo (sobrescribe todo lo relevante):
```
$FEN="C:\Users\LENOVO\Downloads\2026\Doctorado\Tesis\Fenómeno"
$REPO="C:\Users\LENOVO\Downloads\2026\Doctorado\Tesis\Página\sentidomatematico"
Copy-Item "$FEN\*.html" "$REPO\" -Force
Copy-Item "$FEN\*.js" "$REPO\" -Force
Copy-Item "$FEN\*.png" "$REPO\" -Force
Copy-Item "$FEN\*.jpg" "$REPO\" -Force
Copy-Item "$FEN\Avances.txt" "$REPO\" -Force
Copy-Item "$FEN\BancoRespuestas.txt" "$REPO\" -Force
Copy-Item "$FEN\Marco Teórico 20-6-26.pdf" "$REPO\" -Force
```

2. En el repo, muestra estado y diff:
```
git -C "$REPO" status
git -C "$REPO" diff --stat
git -C "$REPO" diff
```

3. Si hay cambios, haz git add ., genera mini descripcion (1 linea, estilo Avances.txt) basada en el diff real y haz:
```
git -C "$REPO" add .
git -C "$REPO" commit -m "<mini descripcion generada>"
git -C "$REPO" push
```

4. Verifica con git -C "$REPO" log --oneline -3 y git -C "$REPO" status que quedo limpio y pusheado a origin/main.

No omitas archivos: siempre copia todo y sube todo con fidelidad 100 por ciento.
