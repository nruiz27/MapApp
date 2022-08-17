import React from 'react';
import  { default as NativeModal }  from 'react-native-modal';
import { View, TouchableOpacity, Platform, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Modal(props)
{
  return (
    <View>
      <NativeModal isVisible={props.isOpen} style={styles.nativeModal} backdropOpacity={0.1}>
        <View style={styles.modalContainer}>
            <View style={styles.modalHeadContainer}>
                <View style={styles.modalHead}>
                  {
                    props.title && <Text style={styles.modalTitle}>{props.title}</Text>
                  }
                  <TouchableOpacity onPress={props.handleOpen} style={styles.closeModalButton}>
                      <View>
                          <Icon name="md-close" size={16} color="#003967"/>
                      </View>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.modalBody}>
                {
                    props.children
                }
            </View>
        </View>
      </NativeModal>
    </View>
  );
}

const styles = StyleSheet.create({
    nativeModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    modalHeadContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    modalHead: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    modalTitle: {
        color: '#333',
        fontSize: 17,
        fontWeight: '600',
    },
    closeModalButton: {
        width: Platform.OS === 'android' ? 22 : 24,
        height: Platform.OS === 'android' ? 22 : 24,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECF0F5',
        position: 'absolute',
        right: 0,
    },
    modalBody: {
        paddingVertical: 10,
        flex: 1,
    }
});