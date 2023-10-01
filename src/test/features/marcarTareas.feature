@marcarTareas
Feature: Marcar tareas como completadas
    Como usuario
    Quiero poder marcar las tareas
    Para mantener mi lista actualizada y organizada

  Scenario: Marcar una tarea
    Given que el usuario se encuentra en la página principial de la aplicación
    And introduce las siguientes tareas <tareas>
    When las tareas <tareasMarcadas> están marcadas como completadas
    Then deberían aparecer las tareas <tareasMarcadas> marcadas
    Then deberían aparecer <numTareasMarcadas> tareas marcadas

    Examples: 
      | tareas                                                 | tareasMarcadas                       | numTareasMarcadas |
      | "Ir al super"                                          | "Ir al super"                        |                 1 |
      | "Comprar pan, Arreglar la bici"                        | "Arreglar la bici"                   |                 1 |
      | "Comprar Ibuprofeno, Comprar levadura, Ir al gimnasio" | "Comprar Ibuprofeno, Ir al gimnasio" |                 2 |
