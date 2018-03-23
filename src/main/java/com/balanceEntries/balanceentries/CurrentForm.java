package com.balanceEntries.balanceentries;

public class CurrentForm {
    private String currentEntryYear;
    private String currentEntryDate;
    private String currentEntryMonth;
    private String currentEntryAccount;
    private String currentDebitAmount;
    private String currentCreditAmount;

    public CurrentForm(){}
    public CurrentForm(String currentEntryYear,
                String currentEntryDate, String currentEntryMonth,
                String currentEntryAccount, String currentDebitAmount,
                String currentCreditAmount) {

        this.currentEntryYear = currentEntryYear;
        this.currentEntryDate = currentEntryDate;
        this.currentEntryMonth = currentEntryMonth;
        this.currentEntryAccount = currentEntryAccount;
        this.currentDebitAmount = currentDebitAmount;
        this.currentCreditAmount = currentCreditAmount;
    }


    public String getCurrentEntryYear() {
        return currentEntryYear;
    }

    public String getCurrentEntryDate() {
        return currentEntryDate;
    }

    public String getCurrentEntryMonth() {
        return currentEntryMonth;
    }

    public String getCurrentEntryAccount() {
        return currentEntryAccount;
    }

    public String getCurrentDebitAmount() {
        return currentDebitAmount;
    }

    public String getCurrentCreditAmount() {
        return currentCreditAmount;
    }

    public void setCurrentEntryYear(String currentEntryYear) {
        this.currentEntryYear = currentEntryYear;
    }

    public void setCurrentEntryDate(String currentEntryDate) {
        this.currentEntryDate = currentEntryDate;
    }

    public void setCurrentEntryMonth(String currentEntryMonth) {
        this.currentEntryMonth = currentEntryMonth;
    }

    public void setCurrentEntryAccount(String currentEntryAccount) {
        this.currentEntryAccount = currentEntryAccount;
    }

    public void setCurrentDebitAmount(String currentDebitAmount) {
        this.currentDebitAmount = currentDebitAmount;
    }

    public void setCurrentEntryCreditAmount(String currentCreditAmount) {
        this.currentCreditAmount = currentCreditAmount;
    }

    @Override
    public String toString() {
        return "CurrentForm{" +
                "currentEntryYear='" + currentEntryYear + '\'' +
                ", currentEntryDate='" + currentEntryDate + '\'' +
                ", currentEntryMonth='" + currentEntryMonth + '\'' +
                ", currentEntryAccount='" + currentEntryAccount + '\'' +
                ", currentEntryDebitAmount='" + currentDebitAmount + '\'' +
                ", currentEntryCreditAmount='" + currentCreditAmount + '\'' +
                '}';
    }
}