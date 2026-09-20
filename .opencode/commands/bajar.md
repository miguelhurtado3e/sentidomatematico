---
description: Trae cambios de GitHub a local con git pull y avisa si falla
agent: build
---

Trae los cambios del remoto a local. Esta carpeta ES el repo (repo único). Ejecuta exactamente estos pasos con bash, sin preguntar:

1. Verifica repo y remoto:
```
git status
git remote -v
```

2. Intenta traer cambios:
```
git pull origin main; if ($?) { Write-Output "OK: local al día con origin/main"; git log --oneline -3; git status } else { Write-Output "FALLÓ git pull — verifica: 1) internet conectado, 2) git remote -v debe mostrar https://github.com/miguelhurtado3e/sentidomatematico.git, 3) si hay conflicto haz git status y git stash o git pull --rebase"; exit 1 }
```

Mensaje corto si falla ya está incluido arriba. No omitas el chequeo de error.
