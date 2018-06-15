import React, { Component } from 'react';



class TodoInputs extends Component {




  var ENTER_KEY = 13;

    handleNewTodoKeyDown(event) {
      if (event.keyCode !== ENTER_KEY) {
        return;
      }

      event.preventDefault();

      var val = this.state.newTodo.trim();

      if (val) {
        this.setState({newTodo: ''});

        addTodo(val);
      }
    },

    uuid() {
      var i, random;
      var uuid='';}

       for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
					.toString(16);
			}

			return uuid;
		},

    addTodo(title) {
      return {
        id: uuid(),
        title: title

      }
    },

    handleChange(event) {
      this.setState({newTodo: event.target.value});
    },

  render() {
    return(
      <div>
        <form>
          <input
            ref="newField"
            className="new-todo"
            placeholder="Wat to do?"
            value={this.state.newTodo}
            onItemInput={this.handleNewTodoKeyDown}
            onChange={this.handleChange}


          />
        </form>
        <button className={onChange}>
        </button>

      </div>
    );
  }
}

export default TodoInputs;
