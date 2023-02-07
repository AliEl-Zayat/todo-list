import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, CheckboxGroup, Tag, Text } from "@chakra-ui/react";

const TodoItem = ({ tasks, handleTasks }) => {
  const tasksListing = tasks.map((el) => (
    <li className="todo-item mb-3" key={el.id}>
      <CheckboxGroup colorScheme="red">
        <Checkbox defaultChecked={el.completed ? true : false}>
          <Text
            onClick={() => handleTasks(el)}
            as="p"
            fontFamily="Lato"
            fontWeight="400"
            fontSize="18px"
            color="#5a5a5a"
            className="todo-text"
          >
            {el.task}
          </Text>
        </Checkbox>
        <Tag
          w="115px"
          display={"grid"}
          placeItems="center"
          backgroundColor="#ea5959"
          color="#fff"
          fontWeight="400"
          fontSize="12px"
        >
          {!el.category ? "Uncategorized" : el.category}
        </Tag>
      </CheckboxGroup>
      <DeleteIcon />
    </li>
  ));
  return <ul className="todo">{tasksListing}</ul>;
};
export default TodoItem;
