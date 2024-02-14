/// <reference types="cypress" />
import CourseGroupMaster from "../PageObjects/CourseGroupMaster"

describe("testStudentMasterBulkUpload", () => {
    before(() => {
      cy.visit("/");
    });
  
    beforeEach(() => {
      cy.Login("admin@emergingfive.com", "admin");
    });

    it("addNewCourseGroup" , () => {
        cy.fixture("MicaCourseGroupMaster.json").then((data) => {
            const MCGM = new CourseGroupMaster();

            MCGM.hoverOnMasterDropdown()
            MCGM.selectCourseGroupMasterOption()
            MCGM.clickAddButton()
            MCGM.enterCourseGroupName(data.addNewCourseGroupWIthValidData.CourseGroupName)
            MCGM.enterShortCourseGroupName(data.addNewCourseGroupWIthValidData.CourseGroupShortName)
            MCGM.clickIsCoreRadioButton()
            MCGM.clickSaveButton()
            MCGM.successMessage()
        })
    })

    it("SearchAndDownloadExcelFile" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.hoverOnMasterDropdown()
          MCGM.selectCourseGroupMasterOption()
          MCGM.searchRecord()
          cy.wait(3000)
          MCGM.clickExcelButton()
      })
    })

    it("SearchAndDownloadExcelFile" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.hoverOnMasterDropdown()
          MCGM.selectCourseGroupMasterOption()
          MCGM.clickEditButton()
          MCGM.enterCourseGroupName(data.UpdateCourseGroupWIthValidData.CourseGroupName)
          MCGM.enterShortCourseGroupName(data.UpdateCourseGroupWIthValidData.CourseGroupShortName)
          MCGM.clickIsMajorRadioButton()
          MCGM.clickSaveButton()
          MCGM.successMessage()
      })
    })

    it("ActiveAndInactiveRecord" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.hoverOnMasterDropdown()
          MCGM.selectCourseGroupMasterOption()
          MCGM.clickEditButton()
          MCGM.clickActiveCheckBox()
          MCGM.clickSaveButton()
          MCGM.successMessage()
          MCGM.isRecordsActiveOrInactive()
      })
    })

    it.only("DeleteRecord" , () => {
      cy.fixture("MicaCourseGroupMaster.json").then((data) => {
          const MCGM = new CourseGroupMaster();

          MCGM.hoverOnMasterDropdown()
          MCGM.selectCourseGroupMasterOption()
          MCGM.inputInSearchBar(data.DeleteRecordSearch.filterRecords)
          MCGM.clickDeleteButton()
          MCGM.clickConfirmDeleteButton()
          MCGM.successMessage()
          MCGM.getTestinGrid()
      })
    })
})