---
description: Trae cambios de GitHub a local con git pull y avisa si falla
agent: build
---

Trae los cambios del remoto a local. Ejecuta exactamente estos pasos con bash, sin preguntar:

1. Verifica repo y remoto:
```
$FEN="C:\Users\LENOVO\Downloads\2026\Doctorado\Tesis\Fenómeno"
git -C "$FEN" status
git -C "$FEN" remote -v
```

2. Intenta traer cambios:
```
git -C "$FEN" pull origin main; if ($?) { Write-Output "OK: local al día con origin/main"; git -C "$FEN" log --oneline -3; git -C "$FEN" status } else { Write-Output "FALLÓ git pull — verifica: 1) internet conectado, 2) git remote -v debe mostrar https://github.com/miguelhurtado3e/sentidomatematico.git, 3) si hay conflicto haz git -C `$FEN status y git -C `$FEN stash o git -C `$FEN pull --rebase"; exit 1 }
```

Mensaje corto si falla ya está incluido arriba. No omitas el chequeo de error.
