/// <reference types="cypress" />

import UserMaster from "../PageObjects/MicaUserMaster"

describe("testUserMaster" , () => {
    before(() => {
        cy.visit("/")
    })

    beforeEach(() => {
        cy.Login("admin@emergingfive.com" , "admin")
    })

    it("addNewUserWithValidData" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.clickaddButtonOnUserMaster()
            UM.enterUserName(data.addnewuserwithvaliddata.Username)
            UM.enterEmailID(data.addnewuserwithvaliddata.EmailID)
            UM.enterContactNo(data.addnewuserwithvaliddata.ContactNO)
            UM.clickOnUserTypeDropdown()
            UM.selectAdminOption()
            UM.clickOnRoleTypeDropdown()
            UM.selectAdminRole()
            UM.clickSaveUserButton()
            cy.wait(5000)
            UM.comanMessage(data.addnewuserwithvaliddata.AddUserSuccessMessage)
        })
    })

    it("checkDuplicateRecords" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.clickaddButtonOnUserMaster()
            UM.enterUserName(data.checkDuplicateData.Username)
            UM.enterEmailID(data.checkDuplicateData.EmailID)
            UM.enterContactNo(data.checkDuplicateData.ContactNO)
            UM.clickOnUserTypeDropdown()
            UM.selectAdminOption()
            UM.clickOnRoleTypeDropdown()
            UM.selectAdminRole()
            UM.clickSaveUserButton()
            UM.comanMessage(data.checkDuplicateData.DuplicateValidationMessage)
        })
    })

    it("checkDuplicateRecords" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.clickUserDeleteButton()
            UM.clickDeleteButtonOnConfirmationPopup()
            UM.comanMessage(data.DeleteUser.DeleteUserMessage)
        })
    })

    it("updateUserData" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.clickEditButtonforUpdateUserData()
            UM.enterUserName(data.editAlldatas.Username)
            UM.enterEmailID(data.editAlldatas.EmailID)
            UM.enterContactNo(data.editAlldatas.ContactNO)
            UM.clickSaveUserButton()
            cy.wait(2000)
            UM.comanMessage(data.editAlldatas.UserDataUpdateMessage)
        })
    })

    it("HandleTableGetUserData" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.ceptureAllRows(data.getNumberofRowsAndColumn.Rows)
            UM.cpatureAllColumn(data.getNumberofRowsAndColumn.Column)
        })
    })

    it("GetFixRecordsIntoTheTable" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.getFixRecords(data.FindRecords.RecordsEmailID)
        })
    })
    
    it("DataDrivenUserMaster" , () => {

        cy.fixture("MicaUserMasterDataDriven.json").then((DDT) => {
            

            DDT.forEach((data) => {
                const UM = new UserMaster();

                UM.hoverOnSystemMasterDropdown()
                UM.clickOnUserMasterOption()
                UM.clickaddButtonOnUserMaster()
                UM.enterUserName(data.Name)
                UM.enterEmailID(data.EmailID)
                UM.enterContactNo(data.MobileNo)
                UM.clickOnUserTypeDropdown()
                UM.selectAdminOption()
                UM.clickOnRoleTypeDropdown()
                UM.selectAdminRole()
                UM.clickSaveUserButton()
                cy.wait(5000)
                UM.comanMessage(data.ToMessage)
            })
        })
    })

    it.only("SaveandEnterDataTestCases" , () => {

        cy.fixture("MicaUserMaster.json").then((data) => {
            const UM = new UserMaster();

            UM.hoverOnSystemMasterDropdown()
            UM.clickOnUserMasterOption()
            UM.clickaddButtonOnUserMaster()
            UM.clickSaveUserButton()
            UM.saveandEnterTosterMessage(data.saveandEnterTest.EnterUserNameMessage)
            UM.enterUserName(data.saveandEnterTest.Username)
            UM.clickSaveUserButton()
            UM.saveandEnterTosterMessage(data.saveandEnterTest.EnterUserEmailIDMessage)
            UM.enterEmailID(data.addnewuserwithvaliddata.EmailID)
            UM.clickSaveUserButton()
            UM.saveandEnterTosterMessage(data.saveandEnterTest.EnterContactNumberMessage)
            UM.enterContactNo(data.addnewuserwithvaliddata.ContactNO)
            UM.clickSaveUserButton()
            UM.saveandEnterTosterMessage(data.saveandEnterTest.SelectUserTypeMessage)
            UM.clickOnUserTypeDropdown()
            UM.selectAdminOption()
            UM.clickSaveUserButton()
            UM.saveandEnterTosterMessage(data.saveandEnterTest.SelectRoleType)
            UM.clickOnRoleTypeDropdown()
            UM.selectAdminRole()
            UM.clickSaveUserButton()
            cy.wait(5000)
            UM.comanMessage(data.saveandEnterTest.AddUserSuccessMessage)
        })
    })
})
