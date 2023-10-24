import Stack from "./Stack";


class UndoManager {
    constructor(buttonUndo, buttonRedo) {
        this.buttonUndo = buttonUndo
        this.buttonRedo = buttonRedo
        this.undoStack = new Stack();
        this.redoStack = new Stack();
    }

    execute(command) {
        this.undoStack.push(command);
        this.buttonUndo.disabled = this.canUndo()
        this.buttonRedo.disabled = this.canRedo()
    }

    canUndo() {
        return this.undoStack.isEmpty();
    }

    canRedo() {
        return this.redoStack.isEmpty();
    }
    

    undo(){
        let command = this.undoStack.peek()
        command.undo()
        this.redoStack.push(command)
        this.undoStack.pop()
        this.buttonUndo.disabled = this.canUndo()
        this.buttonRedo.disabled = this.canRedo()
    }

    redo(){
        let command = this.redoStack.peek()
        command.redo()
        this.undoStack.push(command)
        this.redoStack.pop()
        this.buttonUndo.disabled = this.canUndo()
        this.buttonRedo.disabled = this.canRedo()
    }
}

export default UndoManager;
