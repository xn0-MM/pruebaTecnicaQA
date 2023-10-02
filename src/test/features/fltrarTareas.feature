@filtrarTarea
Feature: Filtrar tareas según su estado
    Como usuario
    Quiero poder filtrar las tareas según su estado, completadas o activas
    Para mantener mi lista actualizada y organizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Filtrar por estado
    Given el usuario crea las siguientes tareas <tareas>
    And el usuario marca como completadas las tareas <tareasMarcadas>
    When el usuario ha seleccionado el filtro <filtro>
    Then deberían aparecer las tareas <tareasResultantes>
    And debería ver <numTareasResultantes> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | filtro      | tareasResultantes            | numTareasResultantes |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "active"    | "Hacer la compra"            |                    1 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "active"    | "Hacer la compra"            |                    1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "completed" | "Sacar al perro"             |                    1 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "completed" | "Ver la tele; Ir a la playa" |                    2 |

  Scenario Outline: Volver a mostrar todas las tareas después de filtrar
    Given el usuario crea las siguientes tareas <tareas>
    And el usuario marca como completadas las tareas <tareasMarcadas>
    And el usuario ha seleccionado el filtro <filtro>
    When hace click en el botón All
    Then deberían aparecer las tareas <tareas>
    And debería ver <numTotalTareas> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | filtro      | numTotalTareas |
      | "Hacer la compra"                             | "Hacer la compra"            | "active"    |              1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "active"    |              2 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "active"    |              3 |
      | "Hacer la compra"                             | "Hacer la compra"            | "completed" |              1 |
      | "Hacer la compra; Sacar al perro"             | "Sacar al perro"             | "completed" |              2 |
      | "Hacer la compra; Ver la tele; Ir a la playa" | "Ver la tele; Ir a la playa" | "completed" |              3 |
