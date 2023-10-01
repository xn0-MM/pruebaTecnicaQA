@eliminarTarea
Feature: Eliminar tareas
    Como usuario
    Quiero poder eliminar tareas en mi lista
    Para mantener mi lista actualizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario: eliminar una tarea con éxito
    And introduce un título para la tarea en el campo de texto
    When pulsa el botón para eliminar la tarea
    Then la tarea debería ser eliminada de la lista

  Scenario: eliminar una tarea marcada como completada
    And introduce un título para la tarea en el campo de texto
    And la tarea está marcada como completada
    When pulsa el botón de eliminar todas las tareas completadas
    Then la tarea debería ser eliminada de la lista

  Scenario Outline: eliminar tarea con varias tareas creadas
    And introduce las siguientes tareas <tareas>
    When pulsa el botón para eliminar la tarea: <tarea>
    Then la tarea <tarea> deberia ser eliminada de la lista
    And el numero de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                             | tarea             | numExpectedTareas |
      | "Hacer la compra; Ir al gimnasio"                  | "Ir al gimnasio"  |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Quedar con Juan" |                 2 |

  Scenario Outline: eliminar una tarea marcada como completada con varias tareas creadas
    And introduce las siguientes tareas <tareas>
    And la tarea <tarea> está marcada como completada
    When pulsa el botón de eliminar todas las tareas completadas
    Then la tarea <tarea> deberia ser eliminada de la lista
    And el numero de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                             | tarea             | numExpectedTareas |
      | "Hacer la compra; Ir al gimnasio"                  | "Ir al gimnasio"  |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Quedar con Juan" |                 2 |

  Scenario Outline: eliminar varias tareas marcadas como completadas con varias tareas creadas
    And introduce las siguientes tareas <tareas>
    And las tareas <tareasMarcadas> están marcadas como completadas
    When pulsa el botón de eliminar todas las tareas completadas
    Then las tareas <tareasMarcadas> deberian ser eliminadas de la lista
    And el numero de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                                               | tareasMarcadas                    | numExpectedTareas |
      | "Hacer la compra; Ir al gimnasio; Concierto en el gran Baba"         | "Ir al gimnasio; Hacer la compra" |                 1 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo; Vacunar al perro" | "Quedar con Juan; Tocar el Bajo"  |                 2 |
