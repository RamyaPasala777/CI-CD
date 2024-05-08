sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/m/Token',
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Token, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("com.app.studentapp.controller.Home", {
            onInit: function () {
                var oview = this.getView();
                var oMultiInput1 = oview.byId("idInput");
                var oMultiInput2 = oview.byId("nameInput");
                var oMultiInput3 = oview.byId("ageInput");
                var oMultiInput4 = oview.byId("branchInput");
                var oMultiInput5 = oview.byId("cityInput");
                let validate = function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text })
                    }
                }
                oMultiInput1.addValidator(validate);
                oMultiInput2.addValidator(validate);
                oMultiInput3.addValidator(validate);
                oMultiInput4.addValidator(validate);
                oMultiInput5.addValidator(validate);
                const oLocalModel = new JSONModel({
                    id:"",
                    name: "",
                    age:"",
                    branch: "",
                    city:""
                });
                this.getView().setModel(oLocalModel, "localModel");
                this.getRouter().attachRoutePatternMatched(this.onEmployeeListLoad, this);
            },

            onEmployeeListLoad: function () {
                this.getView().byId("idStudentTable").getBinding("items").refresh();
            },

            onGo: function () {

                const oview = this.getView(),
                    oid = oview.byId("idInput"),
                    sid = oid.getTokens(),


                    oName = oview.byId("nameInput"),
                    sName = oName.getTokens(),
                    oAge = oview.byId("ageInput"),
                    sAge = oAge.getTokens(),
                    oBranch = oview.byId("branchInput"),
                    sBranch = oBranch.getTokens(),
                    oCity = oview.byId("cityInput"),
                    sCity = oCity.getTokens(),

                    otable = oview.byId("idStudentTable"),

                    afilter = [];
                console.log(sid)
                console.log("Nave");

                //element?afilter.push(newFilter("id",FilterOperator.EQ,element.getkey())):""
                sid.filter((element) => {
                    element ? afilter.push(new Filter("id", FilterOperator.EQ, element.getKey())) : ""
                });
                sName.filter((element) => {
                    element ? afilter.push(new Filter("name", FilterOperator.EQ, element.getKey())) : ""
                });
                sAge.filter((element) => {
                    element ? afilter.push(new Filter("age", FilterOperator.EQ, element.getKey())) : ""
                });
                sBranch.filter((element) => {
                    element ? afilter.push(new Filter("branch", FilterOperator.EQ, element.getKey())) : ""
                });
                sCity.filter((element) => {
                    element ? afilter.push(new Filter("city", FilterOperator.EQ, element.getKey())) : ""
                })
                otable.getBinding("items").filter(afilter)
            },
            onClear: function () {
                const oview = this.getView(),
                    oId = oview.byId("idInput").destroyTokens(),
                    oName = oview.byId("nameInput").destroyTokens(),
                    oAge = oview.byId("ageInput").destroyTokens(),
                    oBranch = oview.byId("branchInput").destroyTokens(),
                    oCity = oview.byId("idInput").destroyTokens()
            },
            studentdetails: function (oEvent) {

                const { id, name } = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
                const oRouter = this.getRouter();
                oRouter.navTo("RouteDetails", {
                    stuid: id,
                    sname: name

                })
            },
            addbtn: async function () {
                if (!this.oCreateStudentDialog) {
                    this.oCreateStudentDialog = await this.loadFragment("creeatestu")

                }


                this.oCreateStudentDialog.open();
            },
            onCreateStudent: async function () {
               
                const oPayload = this.getView().getModel("localModel").getProperty("/"),
                    oModel = this.getView().getModel("ModelV2");
                try {
                    await this.createData(oModel, oPayload, "/student");
                    this.getView().byId("idStudentTable").getBinding("items").refresh();
                    this.oCreateStudentDialog.close();
                } catch (error) {
                    this.oCreateStudentDialog.close();
                    MessageBox.error("Some technical Issue");
                }

            },
            onCloseDialog: function () {
                if (this.oCreateStudentDialog.isOpen()) {
                    this.oCreateStudentDialog.close()
                }
            }
        });
    });
