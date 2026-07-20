import { useState } from "react";
import { TodoTabs } from "./TodoTabs";
import { TodoContent } from "./TodoContent";
import { useTodo } from "../../hooks/useTodo";

export function TodoPage() {
  const [currentTab, setCurrentTab] = useState(1);
  const { data, loading } = useTodo(currentTab);

  return (
    <div>
      <TodoTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TodoContent loading={loading} title={data.title} />
    </div>
  );
}
