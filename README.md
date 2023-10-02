# PruebaTecnicaQA


## Descripcción
El proyecto consiste en un framework de pruebas automatizadas sobre una web app [ToDo](https://todomvc.com/examples/vue/),
el cual implementa BDD a través de Cucumber, también se usa Playwright como motor de automatización y Chai para las aserciones. 

## Alcance


## CI

La batería de pruebas está implementada en un sencillo ciclo CI, en el que cada vez que se hace un commit a la rama main
se instalan las dependencias necesarias, se cargan las variables de entorno encriptadas gracias a dotenv-vault y se ejecutan 
las pruebas para posteriormente generar un reporte gracias a multiple-cucumber-html-reports y subirlo a github pages en este [enlace](https://xn0-mm.github.io/pruebaTecnicaQA/)



# Práctica 2

En la rama practica2 del proyecto, dentro  de src/tests/features se encuentra el archivo feature que describe la funcionalidad según los 
criterios en el documento de la práctica. En cualquier caso los añado aquí mismo:

## Feature: Asignar prioridades a los elementos de la lista
_**Como usuario**_  
_**Quiero** poder asignar prioridades a mis tareas_  
_**Para** organizar mi trabajo según su importancia_

### Background:
_**Given** que el usuario se encuentra en la página principal de la aplicación_

### Scenario Outline: Asignar prioridad al crear un elemento
_**When** el usuario crea las siguientes tareas <tareas>_  
_**Then** la tarea debería tener una prioridad media por defecto_

```plaintext
Examples: 
  | tarea                          | prioridadPorDefecto |
  | "Ir al super"                  | media               |
  | "Pagar la factura, Ir al cine" | media               |
```
### Scenario Outline: Cambiar la prioridad de un elemento
_**Given** el usuario crea las siguientes tareas <tareas>_
_**When** el usuario cambia la prioridad de la tarea <tareasCambiadas> a <nuevaPrioridad>_
_**Then** las tareas <tarea> debería tener una prioridad de <nuevaPrioridad>_

```plaintext
    Examples: 
      | tarea                          | tareasCambiadas                | nuevaPrioridad |
      | "Ir al super"                  | "Ir al super"                  | alta           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura"             | baja           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura; Ir al cine" | "baja; alta"   |
```
### Scenario Outline: Filtrar tareas por prioridad
_**Given** el usuario crea las siguientes tareas <tareas>_
 **And** el usuario cambia la prioridad de la tarea <tareasCambiadas> a <nuevaPrioridad>_
_**When** el usuario filtra las tareas por prioridad <filtro>_
_**Then** deberían aparecer las tareas <tareasResultantes>_
**And** debería ver <numTareasResultantes> tareas_

```plaintext
    Examples: 
      | tareas                                           | tareasCambiadas                | nuevaPrioridad | filtro | tareasResultantes                                | numTareasResultantes |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | todas  | "Ir al super; Pagar la factura; Hacer ejercicio" |                    3 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | alta   | "Ir al super"                                    |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Pagar la factura"             | baja           | baja   | "Pagar la factura"                               |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; alta"   | media  | "Hacer ejercicio"                                |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; baja"   | baja   | "Hacer ejercicio; Ir al super"                   |                    2 |
```
  
