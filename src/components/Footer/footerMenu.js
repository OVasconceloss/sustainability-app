import { 
    View,
    Text,
    TouchableOpacity 
 } from "react-native";
import footerMenuStyle from "./footerMenuStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FooterMenu() {
    return (
        <View style={[footerMenuStyle.footerMenu, footerMenuStyle.shadow]}>
            <TouchableOpacity style={footerMenuStyle.menuItem}>
                <Icon name="home" size={24} color="#16A34A" />
                <Text style={footerMenuStyle.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerMenuStyle.menuItem}>
                <Icon name="user" size={24} color="#16A34A" />
                <Text style={footerMenuStyle.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerMenuStyle.menuItem}>
                <Icon name="newspaper-o" size={24} color="#16A34A" />
                <Text style={footerMenuStyle.menuText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerMenuStyle.menuItem}>
                <Icon name="question" size={24} color="#16A34A" />
                <Text style={footerMenuStyle.menuText}>Quizz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerMenuStyle.menuItem}>
                <Icon name="cog" size={24} color="#16A34A" />
                <Text style={footerMenuStyle.menuText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}