@marcarTareas
Feature: Marcar tareas como completadas
    Como usuario
    Quiero poder marcar las tareas
    Para mantener mi lista actualizada y organizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Marcar una tarea como completada
    And el usuario crea las siguientes tareas <tareas>
    When las tareas <tareasMarcadas> están marcadas como completadas
    Then deberían aparecer las tareas <tareasMarcadas> marcadas
    Then deberían aparecer <numTareasMarcadas> tareas marcadas

    Examples: 
      | tareas                                                 | tareasMarcadas                       | numTareasMarcadas |
      | "Ir al super"                                          | "Ir al super"                        |                 1 |
      | "Comprar pan; Arreglar la bici"                        | "Arreglar la bici"                   |                 1 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" | "Comprar Ibuprofeno; Ir al gimnasio" |                 2 |

  Scenario Outline: Marcar todas las tareas como completadas
    And el usuario crea las siguientes tareas <tareas>
    When hace click en el botón Mark all as completed
    Then deberían aparecer las tareas <tareas> marcadas
    Then deberían aparecer <numTareasMarcadas> tareas marcadas

    Examples: 
      | tareas                                                 | numTareasMarcadas |
      | "Ir al super"                                          |                 1 |
      | "Comprar pan; Arreglar la bici"                        |                 2 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio" |                 3 |
