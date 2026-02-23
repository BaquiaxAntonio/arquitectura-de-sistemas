# Proyecto: Aplicación Web con Despliegue en AWS Beanstalk

Este proyecto es una aplicación web estática construida con **Vite**, dockerizada y desplegada automáticamente mediante **GitHub Actions** en **AWS Elastic Beanstalk**.

## URL de la Aplicación
http://assignment-03-env.eba-gfgg5qpe.us-east-1.elasticbeanstalk.com/

## Implementación de Husky
En este proyecto, se configuró **Husky** para mejorar la calidad del código y mantener la consistencia en el repositorio.

**¿Para qué se usó?**
Se implementó un hook de `pre-commit` que realiza las siguientes acciones antes de permitir un commit:
* **Linting/Formatting:** Asegura que el código siga las reglas de estilo definidas.
* **Validación de Mensajes:** (Si configuraste commitlint) Verifica que los mensajes sigan el formato requerido.

Esto evita que subamos código con errores básicos o estilos inconsistentes al pipeline de CI/CD, ahorrando tiempo y recursos de cómputo en AWS.

## Configuración de AWS Beanstalk
La aplicación corre sobre un entorno de **Docker de 64 bits**. Se configuraron los secretos (Access Keys y Region) de forma segura utilizando **Doppler**, los cuales se sincronizan automáticamente con GitHub Actions.

### Evidencia del Despliegue
Captura de la Aplicación en la carpeta Docs

### Configuración en la Consola de AWS
Capturas de la Configuracion de AWS en la carpeta Docs