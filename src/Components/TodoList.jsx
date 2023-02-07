import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Get a new helmet", category: "", completed: true },
    {
      id: 2,
      task: "Purchase Milk & Corn Flakes",
      category: "Groceries",
      completed: false,
    },
    { id: 3, task: "Pay mortgage", category: "Payments", completed: false },
    {
      id: 4,
      task: "Complete Assignments",
      category: "College",
      completed: false,
    },
    { id: 5, task: "Replace laptop’s screen", category: "", completed: false },
  ]);
  const handleTasks = (data) => {
    // setTasks(data);
    console.log(data);
    setTasks(data);
  };
  return (
    <Box
      display="flex"
      w="100%"
      flexWrap="wrap"
      alignContent="flex-start"
      paddingEnd="30px"
      paddingTop="30px"
    >
      <Text as="h1" fontSize="31px" fontWeight="700" fontFamily="Lato">
        All Tasks
      </Text>
      <Input
        w="100%"
        mt="25px"
        mb="35px"
        flexGrow="1"
        bgColor="#f3f3f3"
        borderRadius="8px"
        placeholder="Add a new task insdie ‘All’ category"
      />
      <Box width="100%">
        <TodoItem tasks={tasks} handleTasks={handleTasks} />
      </Box>
    </Box>
  );
};
export default TodoList;
