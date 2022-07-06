import React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { Avatar, List, ListItem, ListHeader } from '@wonder-ui/core';
import { users } from './users';

type IUser = {
  id: string;
  avatar: string;
  name: string;
  description: string;
};

const reorder = (
  list: Iterable<IUser> | ArrayLike<IUser>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default () => {
  const [list, setList] = React.useState<IUser[]>(users);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newList = reorder(
      list,
      result.source.index,
      result.destination.index
    );
    setList([...newList]);
  };

  return (
    <List>
      <ListHeader>拖拽排序</ListHeader>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(droppableProvided) => (
            <div ref={droppableProvided.innerRef}>
              {list.map((item, index: number) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.8 : 1
                      }}
                      key={item.name}
                      prefix={
                        <Avatar
                          src={item.avatar}
                          fit="cover"
                          size={40}
                          variant="circular"
                        />
                      }
                      primary={item.name}
                      secondary={item.description}
                    />
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </List>
  );
};
