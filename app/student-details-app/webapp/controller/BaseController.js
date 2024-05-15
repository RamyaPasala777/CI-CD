sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
    ], 
    
    function(Controller,Fragment) {
        'use strict';
        return Controller.extend("com.app.studentdetailsapp.controller.BaseController", {
             getRouter : function(){
                return this.getOwnerComponent().getRouter()
             },
            loadFragment: async function(sFragment){
                const oStudent=await Fragment.load({
                    id:this.getView().getId(),
                    name:`com.app.studentapp.Fragments.${sFragment}`,
                    controller:this
                });
              this.getView().addDependent(oStudent);
    
                return oStudent
    
             },
             createData: function(oModel, oPayload, sPath){
                debugger;
                return new Promise((resolve, reject) => {
                    oModel.create(sPath, oPayload, {
                        refreshAfterChange: true,
                        success: function(oSuccessData){
                           
                            resolve(oSuccessData);
                        },
                        error: function(oErrorData){
                            reject(oErrorData)
                        }
                    })
                })
            },
            deleteData: function(oModel, sPath, ID){
                return new Promise((resolve, reject) => {
                    oModel.remove(`${sPath}/${ID}`, {
                        success: function(oSuccessData){
                            resolve(oSuccessData);
                        },
                        error: function(oErrorData){
                            reject(oErrorData)
                        }
                    })
                })            
            }
        })
        
    });
    