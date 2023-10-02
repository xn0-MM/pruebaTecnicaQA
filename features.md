# Práctica 1


## Feature: Crear tareas
_**Como** usuario_
_**Quiero** poder añadir nuevas tareas a mi lista_
_**Para** recordar lo que necesito hacer_

### Background: 
_**Given** que el usuario se encuentra en la página principial de la aplicación_

### Scenario Outline: Añadir varias tareas
_**When** el usuario crea las siguientes tareas "tareas"_
_**Then** debería ver tareas en la lista con los títulos: "tareasListadas"_
_**And** debería ver "numExpectedTareas" tareas_

```plaintext
    Examples: 
      | tareas                                             | tareasListadas                                     | numExpectedTareas |
      | ""                                                 | ""                                                 |                 0 |
      | "Hacer la compra"                                  | "Hacer la compra"                                  |                 1 |
      | "Hacer la compra; Ir al gimnasio"                  | "Hacer la compra; Ir al gimnasio"                  |                 2 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Comprar entradas; Quedar con Juan; Tocar el bajo" |                 3 |
```

## Feature: Editar tareas
_**Como** usuario_  
_**Quiero** poder editar las tareas_  
_**Para** mantener las tareas actualizadas o corregir errores_    

### Background: 
_**Given** que el usuario se encuentra en la página principial de la aplicación_

### Scenario Outline: Editar una o varias tareas
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**When** el usuario hace doble click en la tarea "tarea" e introduce una nueva tarea "nuevaTarea"_  
_**Then** la tarea debería mostrarse con el título actualizado: "nuevaTarea"_  
_**And** el número de tareas restantes debe ser "numExpectedTareas"_  

```plaintext
    Examples: 
      | tareas                                                     | tarea                            | nuevaTarea                    | numExpectedTareas |
      | "Hacer la compra"                                          | "Hacer la compra"                | "Arreglar el coche"                          |                 1 |
      | "Hacer la compra; Ir al gimnasio"                          | "Hacer la compra"                | "Hacer la compra: Pan, huevos, leche aceite" |                 2 |
      | "Comprar entradas Reguera; Quedar con Paco; Tocar el bajo" | "Quedar con Paco; Tocar el bajo" | "Quedar con Paco a las 9; Ir a bolonia"      |                 3 |
      | "Comprar entradas; Quedar con Paco; Tocar el bajo"         | "Quedar con Paco; Tocar el bajo" | "Quedar con Paco a las 9;      "             |                 2 |
```

## Feature: Eliminar tareas
_**Como** usuario_  
_**Quiero** poder eliminar tareas en mi lista_  
_**Para** mantener mi lista actualizada_  

### Background: 
_**Given** que el usuario se encuentra en la página principial de la aplicación_

### Scenario Outline: Eliminar tareas específicas
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**When** el usuario pulsa el botón para eliminar la tarea: "tarea"_  
_**Then** las tareas "tarea" deberian ser eliminadas de la lista_  
_**And** el número de tareas restantes debe ser "numExpectedTareas"_  

```plaintext
    Examples: 
      | tareas                                             | tarea                               | numExpectedTareas |
      | "Hacer la compra"                                  | "Hacer la compra"                   |                 0 |
      | "Hacer la compra; Ir al gimnasio"                  | "Ir al gimnasio"                    |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Quedar con Juan; Comprar entradas" |                 1 |
```

### Scenario Outline: Eliminar tareas marcadas como completadas con el botón eliminar completadas
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**And** el usuario marca como completadas las tareas "tareasMarcadas"_  
_**When** el usuario pulsa el botón de eliminar todas las tareas completadas_  
_**Then** las tareas "tareasMarcadas" deberian ser eliminadas de la lista_  
_**And** el número de tareas restantes debe ser "numExpectedTareas"_  

```plaintext
    Examples: 
      | tareas                                                               | tareasMarcadas                    | numExpectedTareas |
      | "Hacer la compra"                                                    | "Hacer la compra"                 |                 0 |
      | "Hacer la compra; Ir al gimnasio"                                    | "Ir al gimnasio"                  |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo"                   | "Quedar con Juan"                 |                 2 |
      | "Hacer la compra; Ir al gimnasio; Concierto en el gran Baba"         | "Ir al gimnasio; Hacer la compra" |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo; Vacunar al perro" | "Quedar con Juan; Tocar el Bajo"  |                 2 |
```
## Feature: Filtrar tareas según su estado
_**Como** usuario_  
_**Quiero** poder filtrar las tareas según su estado, completadas o activas_  
_**Para** mantener mi lista actualizada y organizada_  

### Background: 
_**Given** que el usuario se encuentra en la página principial de la aplicación_

### Scenario Outline: Filtrar por estado
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**And** el usuario marca como completadas las tareas "tareasMarcadas"_  
_**When** el usuario ha seleccionado el filtro "filtro"_  
_**Then** deberían aparecer las tareas "tareasResultantes"_  
_**And** debería ver "numTareasResultantes" tareas_  

```plaintext
    Examples: 
      | tareas                                        | tareasMarcadas               | filtro      | tareasResultantes            | numTareasResultantes |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "active"    | "Hacer la compra"            |                    1 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "active"    | "Hacer la compra"            |                    1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "completed" | "Sacar al perro"             |                    1 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "completed" | "Ver la tele; Ir a la playa" |                    2 |
```

### Scenario Outline: Volver a mostrar todas las tareas después de filtrar
_**Given** el usuario crea las siguientes tareas "tareas"_
_**And** el usuario marca como completadas las tareas "tareasMarcadas"_
_**And** el usuario ha seleccionado el filtro "filtro"_
_**When** hace click en el botón All_
_**Then** deberían aparecer las tareas "tareas"_
_**And** debería ver "numTotalTareas" tareas_

```plaintext
    Examples: 
      | tareas                                        | tareasMarcadas               | filtro      | numTotalTareas |
      | "Hacer la compra"                             | "Hacer la compra"            | "active"    |              1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "active"    |              2 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "active"    |              3 |
      | "Hacer la compra"                             | "Hacer la compra"            | "completed" |              1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "completed" |              2 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "completed" |              3 |
```

## Feature: Marcar tareas como completadas
_**Como** usuario_
_**Quiero** poder marcar las tareas_
_**Para** mantener mi lista actualizada y organizada_


### Background: 
_**Given** que el usuario se encuentra en la página principial de la aplicación_

### Scenario Outline: Marcar una o varias tarea como completada
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**When** el usuario marca como completadas las tareas "tareasMarcadas"_  
_**Then** las tareas "tareasMarcadas" deberían estar marcadas como completadas_  
_**And** el total de tareas marcadas como completadas debería ser "numTareasMarcadas"_  

```plaintext
    Examples: 
      | tareas                                                 | tareasMarcadas                       | numTareasMarcadas |
      | "Ir al super"                                          | "Ir al super"                        |                 1 |
      | "Comprar pan; Arreglar la bici"                        | "Arreglar la bici"                   |                 1 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" | "Comprar Ibuprofeno; Ir al gimnasio" |                 2 |
```

### Scenario Outline: Marcar todas las tareas como completadas con el botón de marcar todas como completadas
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**When** hace click en el botón Mark all as completed_  
_**Then** todas las tareas deberían estar marcadas como completadas_  
_**And** el total de tareas marcadas como completadas debería ser "totalTareasMarcadas"_  

```plaintext
    Examples: 
      | tareas                                                 | totalTareasMarcadas |
      | "Ir al super"                                          |                   1 |
      | "Comprar pan; Arreglar la bici"                        |                   2 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" |                   3 |
```

## Feature: Contador de tareas pendientes
_**Como** usuario_  
_**Quiero** ver en un contador cuántas tareas tengo pendientes_  
_**Para** saber cuántas tareas me quedan por realizar_  

_**Background**:_ 
_**Given** que el usuario se encuentra en la página principal de la aplicación_

### Scenario Outline: Mostrar tareas pendientes en el contador
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**And** el usuario marca como completadas las tareas "tareasCompletadas"_  
_**Then** el contador debería mostrar "numContador" items left_  

```plaintext
    Examples: 
      | tareas                                                   | tareasCompletadas                    | numContador |
      | "Ir al super"                                            | ""                                   |           1 |
      | "Comprar pan; Arreglar la bici"                          | ""                                   |           2 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio"   | ""                                   |           3 |
      | "Ir al super"                                            | "Ir al super"                        |           0 |
      | "Comprar pan; Arreglar la bici"                          | "Arreglar la bici"                   |           1 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio"   | "Comprar Ibuprofeno; Ir al gimnasio" |           1 |
      | "Comprar Ibuprofeno; Sacar al perro; Comer más verduras" | "Comprar Ibuprofeno"                 |           2 |
```

# Práctica 2

En la rama practica2 del proyecto, dentro  de src/tests/features se encuentra el archivo feature que describe la funcionalidad según los 
criterios en el documento de la práctica. En cualquier caso los añado aquí mismo:

## Feature: Priorizar tareas
_**Como usuario**_  
_**Quiero** poder asignar prioridades a mis tareas_  
_**Para** organizar mi trabajo según su importancia_  

### Background:
_**Given** que el usuario se encuentra en la página principal de la aplicación_  

### Scenario Outline: Asignar prioridad cuando se crean uno o más elementos
_**When** el usuario crea las siguientes tareas "tareas"_  
_**Then** la tarea debería tener una prioridad media por defecto_  

```plaintext
Examples: 
  | tarea                          | prioridadPorDefecto |
  | "Ir al super"                  | media               |
  | "Pagar la factura, Ir al cine" | media               |
```
### Scenario Outline: Cambiar la prioridad de un elemento
_**Given** el usuario crea las siguientes tareas "tareas"_  
_**When** el usuario cambia la prioridad de la tarea "tareasCambiadas" a "nuevaPrioridad"_  
_**Then** las tareas "tarea" debería tener una prioridad de "nuevaPrioridad"_  

```plaintext
    Examples: 
      | tarea                          | tareasCambiadas                | nuevaPrioridad |
      | "Ir al super"                  | "Ir al super"                  | alta           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura"             | baja           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura; Ir al cine" | "baja; alta"   |
```
### Scenario Outline: Filtrar tareas por prioridad
_**Given** el usuario crea las siguientes tareas "tareas"_  
 **And** el usuario cambia la prioridad de la tarea "tareasCambiadas" a "nuevaPrioridad"_  
_**When** el usuario filtra las tareas por prioridad "filtro"_  
_**Then** deberían aparecer las tareas "tareasResultantes"_  
_**And** debería ver "numTareasResultantes" tareas_  

```plaintext
    Examples: 
      | tareas                                           | tareasCambiadas                | nuevaPrioridad | filtro | tareasResultantes                                | numTareasResultantes |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | todas  | "Ir al super; Pagar la factura; Hacer ejercicio" |                    3 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | alta   | "Ir al super"                                    |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Pagar la factura"             | baja           | baja   | "Pagar la factura"                               |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; alta"   | media  | "Hacer ejercicio"                                |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; baja"   | baja   | "Hacer ejercicio; Ir al super"                   |                    2 |
```