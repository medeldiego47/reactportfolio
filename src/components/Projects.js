import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>Projects
        <section id="Project">
            <h2 class="container">Portfolio</h2>
        <div class="container3">
            <div class="container3">
                <a href="https://medeldiego47.github.io/week1" target="blank"><img class="img" src="cactus1.JPG" width="200px" height="200px" alt="project 1"></img></a>
                <p class="cap">Refactored code</p>
                
            </div>
            <div class="container3">
                <a href="https://catpolk.github.io/Bored-NO-MO-project-1/"><img src="branch.JPG" width="200px" height="200px" alt="project 1"></img></a>
                <p class="cap">Bored No Mo</p>
                
            </div>
            <div class="container3">
                <a href="https://grabajob.herokuapp.com/"><img src="leaf.JPG" width="200px" height="200px" alt="project 2"></img></a>

                <p class="cap">GrabAJob</p>
            </div>
            <div class="container3">
                <a href="#project"><img src="tee.JPG" width="200px" height="200px" alt="project 1"></img></a>

                <p class="cap">sample project 4</p>
            </div>
            <div class="container3">
                <a href="#project"><img src="sunset.JPG" width="200px" height="200px" alt="project 1"></img></a>

                <p class="cap">sample project 5</p>
            </div>
            <div class="container3">
                <a href="#project"><img src="oreo.JPG" width="200px" height="200px" alt="project 1"></img></a>

                <p class="cap">sample project 6</p>
            </div>
          
        </div>
    </section>
      </div>
    )
  }
}

