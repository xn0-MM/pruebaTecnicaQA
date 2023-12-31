@marcarTareas
Feature: Marcar tareas como completadas
    Como usuario
    Quiero poder marcar las tareas
    Para mantener mi lista actualizada y organizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Marcar una o varias tarea como completada
    Given el usuario crea las siguientes tareas <tareas>
    When el usuario marca como completadas las tareas <tareasMarcadas>
    Then las tareas <tareasMarcadas> deberían estar marcadas como completadas
    And el total de tareas marcadas como completadas debería ser <numTareasMarcadas>

    Examples: 
      | tareas                                                 | tareasMarcadas                       | numTareasMarcadas |
      | "Ir al super"                                          | "Ir al super"                        |                 1 |
      | "Comprar pan; Arreglar la bici"                        | "Arreglar la bici"                   |                 1 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" | "Comprar Ibuprofeno; Ir al gimnasio" |                 2 |

  Scenario Outline: Marcar todas las tareas como completadas con el botón de marcar todas como completadas
    Given el usuario crea las siguientes tareas <tareas>
    When hace click en el botón Mark all as completed
    Then todas las tareas deberían estar marcadas como completadas
    And el total de tareas marcadas como completadas debería ser <totalTareasMarcadas>

    Examples: 
      | tareas                                                 | totalTareasMarcadas |
      | "Ir al super"                                          |                   1 |
      | "Comprar pan; Arreglar la bici"                        |                   2 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" |                   3 |
