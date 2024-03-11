/// <reference types="cypress" />


import roleMaster from "../PageObjects/RoleMaster";

describe("Testing Role Master" , () => {
    before(() => {
        cy.visit("/")
    })
    beforeEach(() => {
        cy.Login("admin@emergingfive.com" , "admin")
        cy.SystemMasterDropdownHoverAndClick(("#role_master"))
    })

    it("testingwithvaliddata" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickAddButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickAddCheckBox()
            RM.clickEditCheckBox()
            RM.clickDeleteCheckBox()
            RM.clickExportCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("DeleteRole" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.searchRoleName(data.NewRoleName.RoleName)
            RM.clickDeleteButton()
            RM.clickConfirmDeletButton()
            RM.successMessage()
        })
    })

    it("EditRole" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserTypeEdit()
            RM.typeRoleNmae(data.EditRoleName.EditName)
            RM.clickAddCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("GiveOnlyAddRights" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickAddCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("GiveOnlyEditRights" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickAddCheckBox()
            RM.clickEditCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("GiveOnlyDeleteRights" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickEditCheckBox()
            RM.clickDeleteCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("GiveOnlyExportRights" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickDeleteCheckBox()
            RM.clickExportCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it("GiveOnlyViewRights" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            RM.clickUserTypeDropdown()
            RM.selectUserType()
            RM.typeRoleNmae(data.NewRoleName.RoleName)
            RM.clickExportCheckBox()
            RM.clickViewCheckBox()
            RM.clickSaveButton()
            RM.successMessage()
        })
    })

    it.only("RemoveUserMasterRightAndthenAccessUserMaster" , () => {
        cy.fixture("RoleMaster.json").then((data) => {
            const RM = new roleMaster();

            RM.clickEditButton()
            cy.wait(3000)
            RM.addCB()
            RM.editCB()
            RM.deleteCB()
            RM.exportCB()
            RM.viewCB()
            RM.clickSaveButton()
            RM.successMessage()
            RM.clickProfileIcon()
            RM.clickLogoutOption()
            cy.Login("vishalhadiyalefive@gmail.com" , "eH1cw5")
            RM.visitUserMasterURL()
            RM.displayErrorCode()
        })
    })
});
