@eliminarTarea
Feature: Eliminar tareas
    Como usuario
    Quiero poder eliminar tareas en mi lista
    Para mantener mi lista actualizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Eliminar tareas específicas
    Given el usuario crea las siguientes tareas <tareas>
    When el usuario pulsa el botón para eliminar la tarea: <tarea>
    Then las tareas <tarea> deberian ser eliminadas de la lista
    And el número de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                             | tarea                               | numExpectedTareas |
      | "Hacer la compra"                                  | "Hacer la compra"                   |                 0 |
      | "Hacer la compra; Ir al gimnasio"                  | "Ir al gimnasio"                    |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Quedar con Juan; Comprar entradas" |                 1 |

  Scenario Outline: Eliminar tareas marcadas como completadas con el botón eliminar completadas
    Given el usuario crea las siguientes tareas <tareas>
    And el usuario marca como completadas las tareas <tareasMarcadas>
    When el usuario pulsa el botón de eliminar todas las tareas completadas
    Then las tareas <tareasMarcadas> deberian ser eliminadas de la lista
    And el número de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                                               | tareasMarcadas                    | numExpectedTareas |
      | "Hacer la compra"                                                    | "Hacer la compra"                 |                 0 |
      | "Hacer la compra; Ir al gimnasio"                                    | "Ir al gimnasio"                  |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo"                   | "Quedar con Juan"                 |                 2 |
      | "Hacer la compra; Ir al gimnasio; Concierto en el gran Baba"         | "Ir al gimnasio; Hacer la compra" |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo; Vacunar al perro" | "Quedar con Juan; Tocar el Bajo"  |                 2 |
