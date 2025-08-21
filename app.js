// app.js
function App() {
    const [tasks, setTasks] = React.useState([]);

    const addTask = () => {
        const newTask = prompt("Enter a new task:");
        if (newTask) {
            setTasks([...tasks, newTask]);
        }
    };

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <h1>My Task Tracker</h1>
            <button onClick={addTask}>Add Task</button>
            <p>Welcome! This is your first React component.</p>
            <Tasklist tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

// Tasklist
function Tasklist({ tasks, removeTask }) {
    if (tasks.length === 0) {
        return <h1>No Tasks</h1>
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
                -
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
