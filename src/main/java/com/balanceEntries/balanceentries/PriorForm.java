package com.balanceEntries.balanceentries;

public class PriorForm {
	private String priorEntryYear;
	private String priorEntryDate;
	private String priorEntryMonth;
	private String priorEntryAccount;
	private String priorEntryAmount;

	public PriorForm(){}
	public PriorForm(String priorEntryYear, String priorEntryDate,
                     String priorEntryMonth, String priorEntryAccount,
                     String priorEntryAmount, String currentEntryYear,
                     String currentEntryDate, String currentEntryMonth,
                     String currentEntryAccount, String currentDebitAmount,
                     String currentCreditAmount) {
		this.priorEntryYear = priorEntryYear;
		this.priorEntryDate = priorEntryDate;
		this.priorEntryMonth = priorEntryMonth;
		this.priorEntryAccount = priorEntryAccount;
		this.priorEntryAmount = priorEntryAmount;
	}

	public String getPriorEntryYear() {
		return priorEntryYear;
	}

	public String getPriorEntryDate() {
		return priorEntryDate;
	}

	public String getPriorEntryMonth() {
		return priorEntryMonth;
	}

	public String getPriorEntryAccount() {
		return priorEntryAccount;
	}

	public String getPriorEntryAmount() {
		return priorEntryAmount;
	}

	public void setPriorEntryYear(String priorEntryYear) {
		this.priorEntryYear = priorEntryYear;
	}

	public void setPriorEntryDate(String priorEntryDate) {
		this.priorEntryDate = priorEntryDate;
	}

	public void setPriorEntryMonth(String priorEntryMonth) {
		this.priorEntryMonth = priorEntryMonth;
	}

	public void setPriorEntryAccount(String priorEntryAccount) {
		this.priorEntryAccount = priorEntryAccount;
	}

	public void setPriorEntryAmount(String priorEntryAmount) {
		this.priorEntryAmount = priorEntryAmount;
	}

	@Override
	public String toString() {
		return "PriorForm{" +
				"priorEntryYear='" + priorEntryYear + '\'' +
				", priorEntryDate='" + priorEntryDate + '\'' +
				", priorEntryMonth='" + priorEntryMonth + '\'' +
				", priorEntryAccount='" + priorEntryAccount + '\'' +
				", priorEntryAmount='" + priorEntryAmount + '\'' +
				'}';
	}
}