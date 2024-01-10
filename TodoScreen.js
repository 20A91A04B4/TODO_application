import { 
    FlatList,
    StyleSheet, 
    Text,
    TextInput, 
    TouchableOpacity, 
    View,
    Button,
} from 'react-native';
import React from 'react';
import { IconButton, iconButton } from "react-native-paper";
import {useState} from "react";


console.log(Date.now().toString());

const TodoScreen =() => {

    //Init local states
    const[todo, setTodo] = useState("")
    const[todoList, setTodoList]= useState([]);

    //Handle add todo
    const handleAddTodo = ()=>{

        //structure of a single todo item
        //{
        //  id:
        //   title:
        //}

        setTodoList([...todoList,{ id: Date.now().toString(),title: todo }]);
        setTodo("");
    };
    //Handle Delete
    const handleDeleteTodo =(id)=>{
        const updatedTodoList= todoList.filter((todo)=> todo.id !=id);
        //structure of a single todo item
        //{
        //  id:
        //   title:
        //}
        setTodoList(updatedTodoList);
        
    };

    //Render todo
    const renderTodos = ({item, index})=>{
        return(
            <View 
                style={{
                    backgroundColor: "#1e90ff", 
                    borderRadius: 6,
                    paddingHorizontal: 6, 
                    paddingVertical: 8,
                    marginBottom: 12,
                    flexDirection:"row",
                    alignItems:"center",
                    shadowColor:"#000",
                    shadowOffset:{width:0,height:2},
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
            >
                
                <Text style={{color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}>
                    {item.title}
                </Text>
                <IconButton icon="pencil" iconColor="#fff"/>
                <IconButton 
                    icon="delete" 
                    iconColor="#fff" 
                    onPress = {()=>handleDeleteTodo(item.id)}
                />

            </View>
        );
    };
    return (
        <View style={{ marginHorizontal: 16}}>
            
            <TextInput
                style={{ 
                    borderWidth: 2,
                    borderColor: "#1e90ff", 
                    borderRadius: 6, 
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    
                }}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText)=>setTodo(userText)}
            />
            <TouchableOpacity 
                style={{ 
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    marginVertical: 34,
                    alignItems:"center",
                    
                }}
                onPress={()=> handleAddTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>
                    ADD
                </Text>
            </TouchableOpacity>


            {/*Render todo list*/}
            <FlatList data = {todoList} renderItem={renderTodos}/>
        
        </View>

    );
};

export default TodoScreen;

const styles = StyleSheet.create({});