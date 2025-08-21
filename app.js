// app.js
function App() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <h1>My Task Tracker</h1>
            <div className="form">
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task" />
                <button className="button" onClick={addTask}>Add Task</button>
            </div>
            <p className="welcome">Thanks for checking out my first, simple, on-going React Project. Primarily, I prefer to use Vanilla JavaScript, but I have decided that this would be fun to learn too!</p>
            <Tasklist tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

// Tasklist
function Tasklist({ tasks, removeTask }) {
    if (tasks.length === 0) {
        return <h2>No Tasks</h2>
    } else {
        return (
            <ul style={{ listStyleType: "none" }}>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        taskTitle={task}
                        removeTask={() => removeTask(index)}
                    />
                ))}
            </ul>
        );
    }
}

// Task
function TaskItem({ taskTitle, removeTask }) {
    const [striked, setStriked] = React.useState(false);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
                type="checkbox"
                checked={striked}
                onChange={() => setStriked(!striked)}
            />
            <li className={striked ? "striked" : ""}>{taskTitle}</li>
            <button className="button-delete" onClick={removeTask}>
                —
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
