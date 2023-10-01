@filtrarTarea
Feature: Filtrar tareas según su estado
    Como usuario
    Quiero poder filtrar las tareas según su estado, completadas o activas
    Para mantener mi lista actualizada y organizada

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Filtrar por tareas activas
    And introduce las siguientes tareas <tareas>
    And las tareas <tareasMarcadas> están marcadas como completadas
    When el usuario hace click en el botón Active
    Then deberían aparecer las tareas <tareasSinCompletar>
    And debería ver <numTareasSinCompletar> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | tareasSinCompletar | numTareasSinCompletar |
      | "Hacer la compra, Sacar al perro"             | "Sacar al perro"             | "Hacer la compra"  |                     1 |
      | "Hacer la compra, Ver la tele, Ir a la playa" | "Ver la tele, Ir a la playa" | "Hacer la compra"  |                     1 |

  Scenario Outline: Filtrar por tareas completadas
    And introduce las siguientes tareas <tareas>
    And las tareas <tareasMarcadas> están marcadas como completadas
    When el usuario hace click en el botón Completed
    Then deberían aparecer las tareas <tareasMarcadas>
    And debería ver <numTareasCompletadas> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | numTareasCompletadas |
      | "Hacer la compra, Sacar al perro"             | "Sacar al perro"             |                    1 |
      | "Hacer la compra, Ver la tele, Ir a la playa" | "Ver la tele, Ir a la playa" |                    2 |

  Scenario Outline: Volver a mostrar todas las tareas una vez filtrado por activas
    And introduce las siguientes tareas <tareas>
    And las tareas <tareasMarcadas> están marcadas como completadas
    And el usuario hace click en el botón Active
    When hace click en el botón All
    Then deberían aparecer las tareas <tareas>
    And debería ver <numTareasEsperadas> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | numTareasEsperadas |
      | "Hacer la compra"                             | "Hacer la compra"            |                  1 |
      | "Hacer la compra, Sacar al perro"             | "Sacar al perro"             |                  2 |
      | "Hacer la compra, Ver la tele, Ir a la playa" | "Ver la tele, Ir a la playa" |                  3 |

    Scenario Outline: Volver a mostrar todas las tareas una vez filtrado por completadas
    And introduce las siguientes tareas <tareas>
    And las tareas <tareasMarcadas> están marcadas como completadas
    And el usuario hace click en el botón Completed
    When hace click en el botón All
    Then deberían aparecer las tareas <tareas>
    And debería ver <numTareasEsperadas> tareas

    Examples: 
      | tareas                                        | tareasMarcadas               | numTareasEsperadas |
      | "Hacer la compra"                             | "Hacer la compra"            |                  1 |
      | "Hacer la compra, Sacar al perro"             | "Sacar al perro"             |                  2 |
      | "Hacer la compra, Ver la tele, Ir a la playa" | "Ver la tele, Ir a la playa" |                  3 |
