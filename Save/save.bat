@echo off
echo Executando git add -A...
git add -A
echo.
echo Executando git commit...
git commit -m "Update"
echo.
echo Executando git push...
git push
echo.
echo Operações concluídas.
pause