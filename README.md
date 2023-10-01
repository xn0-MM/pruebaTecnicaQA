# pruebaTecnicaQA
Prueba técnica QA para Mirai

El proyecto consiste en un framework de pruebas automatizadas sobre una web app [ToDo](https://todomvc.com/examples/vue/),
el cual implementa BDD a través de Cucumber, también se usa Playwright como motor de automatización y Chai para las aserciones. 


#CI

La batería de pruebas está implementada en un sencillo ciclo CI, en el que cada vez que se hace un commit a la rama main
se instalan las dependencias necesarias, se cargan las variables de entorno encriptadas gracias a dotenv-vault y se ejecutan 
las pruebas para posteriormente generar un reporte gracias a multiple-cucumber-html-reports y subirlo a github pages en este [enlace](https://xn0-mm.github.io/pruebaTecnicaQA/)
