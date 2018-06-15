function(){
  app.todoActions,
  app.alt.createActions({
    addTodo(title) {
      return {
        id: uuid(),
        title: title
        
      };
    }
  })
}
