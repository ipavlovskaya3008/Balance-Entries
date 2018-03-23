package com.balanceEntries.balanceentries;

import java.util.List;
public class Form {
    List<PriorForm> priorEntries;
    List<CurrentForm> currentEntries;

    public Form(){};
    public Form(List<PriorForm> priorEntries, List<CurrentForm> currentEntries) {
        this.priorEntries = priorEntries;
        this.currentEntries = currentEntries;
    }

    public void setPriorEntries(List<PriorForm> priorEntries) {
        this.priorEntries = priorEntries;
    }

    public void setCurrentEntries(List<CurrentForm> currentEntries) {
        this.currentEntries = currentEntries;
    }

    public List<PriorForm> getPriorEntries() {

        return priorEntries;
    }

    public List<CurrentForm> getCurrentEntries() {
        return currentEntries;
    }

    @Override
    public String toString() {
        return "Form{" +
                "priorEntries=" + priorEntries +
                ", currentEntries=" + currentEntries +
                '}';
    }
}
