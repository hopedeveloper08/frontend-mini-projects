import { useState } from "react"

function ToDo() {
  const [tasks, setTasks] = useState([
    { title: 'توسعه پروژه چک لیست روزانه', important: true, urgent: true, check: false },
    { title: 'توسعه پروژه چک لیست روزانه', important: false, urgent: true, check: false },
    { title: 'توسعه پروژه چک لیست روزانه', important: true, urgent: false, check: false },
    { title: 'توسعه پروژه چک لیست روزانه', important: false, urgent: false, check: false },
    { title: 'توسعه پروژه چک لیست روزانه', important: true, urgent: true, check: true },
  ])

  function insertTask() {
    
  }

  function removeTask() {

  }

  return (
    <main className="
      w-full
    ">

    </main>
  )
}

export default ToDo