# PruebaTecnicaQA

## Descripcción

El proyecto consiste en un framework de pruebas automatizadas, las cuales comprueban las principales funcionalidades de una web app [to do](https://todomvc.com/examples/vue/). El framework implementa BDD a través de Cucumber, también se usa Playwright como motor de automatización y Chai para las aserciones.

## Features

Las descripciones en Gherkin de las prácticas uno y dos se encuentran en este [documento](features.md) y en los correspondientes archivos
.feature que se encuentran en src/tests/features en la rama practica2. Todos los escenarios se encuentran también en Qase, en este [enlace](https://app.qase.io/project/PC)

## Ejecución

### Para ejecutar el proyecto en local necesitamos:

* Clonar el proyecto  

* Instalar las dependencias  

```shell
npm install
```

* Instalar los navegadores  

``` shell
npx playwright install
```

* Ejecutar los tests, automáticamente se generará un reporte HTML al terminar la ejecución  

```shell
npm test
```

* Si alguna  de las pruebas ha fallado podemos reejecutarlas con el siguiente comando

```shell
npm run test:failed
```

También existe la posibilidad de ejecutar las pruebas agrupadas por feature, usando alguno de los siguientes tags:

* crearTarea
* editarTarea
* eliminarTarea
* filtrarTarea
* marcarTarea
* contadorTarea  

```shell
npm run test:"tag"
```  

### Para ejecutar los tests en CI:  

Normalmente los tests se ejecutarán automáticamente al hacer un commit a la rama principal del proyecto, pero si queremos ejecutarla manualmente tenemos la opción en este [enlace](https://github.com/xn0-MM/pruebaTecnicaQA/actions/workflows/pro.yml), pulsando el botón "Run Workflow" en el encabezado de la lista.

## Configuraciones
En el archivo .config situado en la raiz del proyecto se encuentran una serie de variables que permiten ajustar las siguientes funcionalidades:

* **Url base:** A través de la variable de entorno BASE_URL podemos indicar la url base del proyecto.  

* **Navegador configurable:** Con la variable de entorno BROWSER, podemos especificar si queremos que las pruebas se ejecuten en firefox, chrome o webkit
* **Paralelización:** Utilizando las variables parallel y workers, se puede definir si se desea habilitar la ejecución paralela de las pruebas y establecer cuántos tests se ejecutarán al mismo tiempo.
* **Headless:** Podemos especificar si queremos que se visualicen los tests al ejecutarse o no.
* **RunSlow:** Con esta variable podemos especificar el tiempo de retardo entre las acciones, es útil si queremos visualizar las pruebas con cierta comodidad
* **Timeouts**: Mediante las variables defaultTimeout y pwTimeout, se puede establecer el tiempo máximo antes de que un test sea considerado fallido, ya sea a nivel global o específicamente para las acciones de Playwright.
* **Captura de pantalla configurable:** Utilizando las variables screenshot, screenshotBySteps y screenshotOnlyWhenFail, es posible ajustar las opciones de captura. Esto nos permite decidir si queremos capturar en cada paso, solamente al concluir el test en caso de fallo, o sin importar el resultado del test.
* **Rerun y retry:** El proyecto está ajustado para crear un archivo rerun.txt si alguno de los tests falla, facilitando la reejecución únicamente de esas pruebas. En el flujo CI, sin embargo, utilizamos retry para asegurarnos de que un test no es flaky. Además, con las variables retry y numberOfRetrys, se puede determinar si los tests se reejecutarán automáticamente la cantidad de veces especificada.
* **Reporte HTML:** El proyecto está configurado para producir un reporte HTML con la librería multiple-cucumber-html-reporter al concluir la ejecución. Además, mediante GitHub Actions, se ha establecido que tras cada commit a la rama 'main', estos resultados se publiquen automáticamente en [este](https://xn0-mm.github.io/pruebaTecnicaQA/) enlace.
* **Viewport:** Mediante esta variable podemos establecer la resolución a la que se ejecután las pruebas

## CI

La suite de pruebas se integra en un flujo CI utilizando Github Actions. Al hacer un commit en la rama main, se inicia el siguiente flujo:

* Se instalan las dependencias requeridas.
* Se instalan los navegadores necesarios.
* Se cargan las variables de entorno encriptadas mediante dotenv-vault.
* Se ejecutan las pruebas. Si alguna falla, se reejecutan automáticamente las pruebas que no pasaron.
* Finalmente, se genera un reporte utilizando multiple-cucumber-html-reports y se publica en GitHub Pages.