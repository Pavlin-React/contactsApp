import { StyleSheet } from "react-native";
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
  
  imageLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 20,
  },
  form: {
    paddingVertical: 20,
  },
  createSection: {
    flexDirection: 'row'
  },
  infoText: {
    fontSize: 17, 
  },
  linkBtn: {
    paddingLeft: 15,
    color: colors.primary,
    fontSize: 16,
  }
})