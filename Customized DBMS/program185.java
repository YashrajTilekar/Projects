import java.lang.*;
import java.net.IDN;
import java.util.*;

//Database Table

class Student
{
    public int RID ;
    public String Name ;
    public int Salary ; 

    private static int Generator ;

    static
    {
        Generator = 0 ;
    }

    public Student(String str ,int iValue)
    {
        this.RID = ++Generator ;
        this.Name = str ;
        this.Salary = iValue ;
    }

    public void DisplayData()
    {
        System.out.println(this.RID + "\t" + this.Name + "\t" + this.Salary);
    }
}

class DBMS
{
    public LinkedList <Student> lobj  ;

    public DBMS()
    {
        lobj = new LinkedList<>() ;
    }

    
    public void StartDBMS()
    {
        Scanner sobj  = new Scanner(System.in);

        System.out.println("Marvellous cutomized DBMS started successfully .....");
        
        String Query = "";

        while(true)
        {
            System.out.print("Marvellous DBMS console>");
            
            Query = sobj.nextLine() ;

            String tokens[] = Query.split(" ");
            int QuerySize = tokens.length ;

            if(QuerySize == 1)
            {
                if("Help".equals(tokens[0]))
                {
                    System.out.println("This Application is used to demonstate Customized DBMS");
                    System.out.println("Exit : Terminate DBMS");
                    System.out.println("Display ALL Data : Select * from student");
                    System.out.println("Insert data : Insert into student name salary");
                }
                else if("Exit".equals(tokens[0]))
                {
                    System.out.println("Thank you for using Marvellous DBMS");
                    break;
                }
            }
            else if(QuerySize == 4)
            {
                if("Select".equals(tokens[0]))
                {
                    if("*".equals(tokens[1]))
                    {
                        DisplayAll();
                    }
                }
            }
            else if(QuerySize == 5)
            {
                // Insert into student Yashraj 70000
                if("Insert".equals(tokens[0]))
                {
                    InsertData(tokens[3] ,Integer.valueOf(tokens[4])) ;
                }
            }
        }
    }

    public void InsertData(String str , int value)
    {
        Student sobj = new Student(str, value) ;

        lobj.add(sobj) ;
    }

    //Display All without any Condition
    public void DisplayAll()
    {
        for(Student sref : lobj)        //lobj contains objects of class Student
        {
            sref.DisplayData();
        }
    }

    //Display by RID
    public void DisplaySpecific(int roll)
    {
        for(Student sref : lobj)        //lobj contains objects of class Student
        {
            if(sref.RID == roll)
            {
                sref.DisplayData();     //We are not writing break because there can be multiple students with same name
            }
        }
    }

    //Display by Name
    public void DisplaySpecific(String name)
    {
        for(Student sref : lobj)
        {
            if(name.equals(sref.Name))
            {
                sref.DisplayData();
                
                break;
            }
        }
    }

    //Delete by RID
    public void DeleteSpecific(int roll)
    {
        int index = 0;

        for(Student sref : lobj)
        {
            if(sref.RID == roll)
            {
                lobj.remove(index) ;
                break ;
            }

            index ++;
        }
    }

    //Delete by Name
    public void DeleteSpecific(String name)
    {
        int index = 0;

        for(Student sref : lobj)
        {
            if(name.equals(sref.Name))
            {
                lobj.remove(index) ;
                break ;
            }

            index ++;
        }
    }

    //Max. salary
    public void AggregateMax()
    {
        int iMax = 0 ;
        Student temp = null ;

        for(Student sref : lobj)
        {
            if(sref.Salary > iMax)
            {
                iMax = sref.Salary ;
                temp = sref ;
            }
        }

        System.out.println("Information of Student having MAXIMUM salary");
        temp.DisplayData();

    }

    //Min. salary
    public void AggregateMin()
    {
        int iMin = (lobj.getFirst()).Salary ;
        Student temp = lobj.getFirst() ;

        for(Student sref : lobj)
        {
            if(sref.Salary < iMin)
            {
                iMin = sref.Salary ;
                temp = sref ;
            }
        }

        System.out.println("Information of Student having MINIMUM salary");
        temp.DisplayData();

    }

    //Sum of Salaries
    public void AggregateSum()
    {
        long iSum = 0 ;

        for(Student sref : lobj)
        {
            iSum = iSum + sref.Salary ;
        }

        System.out.println("Summation of Salaries is :" + iSum);
    }

    //Average Salary
    public void AggregateAverage()
    {
        long iSum = 0 ;

        for(Student sref : lobj)
        {
            iSum = iSum + sref.Salary ;
        }

        System.out.println("Average Salary is :" + iSum/(lobj.size()));
    }

    public void AggregateCount()
    {
        System.out.println("Number of Students are :" + lobj.size());
    }

}

class program185
{
    public static void main(String[] args)
    {
        DBMS dobj = new DBMS();

        dobj.StartDBMS();
        /*dobj.InsertData("Yashraj", 70000);
        dobj.InsertData("Pranav", 30000);
        dobj.InsertData("Ram", 20000);

        //dobj.DisplayAll();
        //dobj.DisplaySpecific(2);
        //dobj.DisplaySpecific("Yashraj");

        //dobj.DeleteSpecific("Pranav");
        dobj.DisplayAll();

        dobj.AggregateMax();
        dobj.AggregateMin();
        dobj.AggregateSum();
        dobj.AggregateAverage();
        dobj.AggregateCount();
        */
    }    
}