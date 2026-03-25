import { View } from "react-native";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native";
import { useState } from "react";

const Tasks = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);

    const add = () => {
        setTasks(previous => [...previous, task])
        setTask("");
    }

    return(
        <View>
            <TextInput onChangeText={setTask}/>
            <Button title="Adicionar" onPress={add}/>
            <FlatList data={tasks} renderItem={({item}) => <Text>{item}</Text>} />
        </View>
    );
} 

export default Tasks;