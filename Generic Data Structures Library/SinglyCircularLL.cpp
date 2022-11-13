#include<iostream>
using namespace std ;

template <class T>
struct node
{
    T data ;
    struct node * next ;
};

template <class T>
class SinglyCLL
{
    public :
        struct node<T> * head ;
        struct node<T> * tail ;
        int iCount ;

        SinglyCLL() ;
        void InsertFirst(T) ;
        void InsertLast(T) ;
        void InsertAtPos(T , int) ;
        void DeleteFirst() ;
        void DeleteLast() ;
        void DeleteAtPos(int) ;
        void Display() ;
        int Count() ;
};

template <class T>
SinglyCLL<T>::SinglyCLL()
{
    head = NULL;
    tail = NULL;
    iCount = 0;
}

template <class T>
void SinglyCLL<T>::InsertFirst(T No)
{
    struct node<T> * newn = NULL ;
    newn = new struct node<T> ;

    newn->data = No ;
    newn->next = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        newn->next = newn;
    }
    else
    {
        newn->next = head;
        head = newn ;
    }

    iCount++;
    tail->next = head;
}

template <class T>
void SinglyCLL<T>::InsertLast(T No)
{
    struct node<T> * newn = NULL ;
    newn = new struct node<T> ;

    newn->data = No ;
    newn->next = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        newn->next = newn;
    }
    else
    {
        tail->next = newn ;
        tail = newn;
        newn->next = head ;
    }

    iCount++;
    tail->next = head;
}

template <class T>
void SinglyCLL<T>::InsertAtPos(T No , int iPos)
{
    if((iPos <= 0) || (iPos > iCount+1))
    {
        cout<<"Invalid Position" ;
        return ;
    }
    else if(iPos == 1)
    {
        InsertFirst(No) ;
        return;
    }
    else if(iPos == iCount+1)
    {
        InsertLast(No) ;
        return;
    }
    else
    {
        struct node<T> * newn = NULL ;
        newn = new struct node<T> ;

        newn->data = No ;
        newn->next = NULL ;

        struct node<T> * temp = NULL ;
        temp = head;

        for(int iCnt = 1 ; iCnt <= (iPos - 2) ; iCnt++)
        {
            temp = temp->next;
        }

        newn->next = temp->next;
        temp->next = newn;

        tail->next = head ;
        iCount++;
    }
}

template <class T>
void SinglyCLL<T>::DeleteFirst()
{
    if(iCount == 0)
    {
        return;
    }
    else if (iCount == 1)
    {
        struct node<T> * temp = head ;
        
        head = NULL ;
        tail = NULL;

        delete temp ;
    }
    else
    {
        struct node<T> * temp = NULL ;
        temp = head ;

        head = head->next ;
        tail->next = head;

        delete temp;
    }
    iCount--;
}

template <class T>
void SinglyCLL<T>::DeleteLast()
{
    if(iCount == 0)
    {
        return;
    }
    else if (iCount == 1)
    {
        struct node<T> * temp = head ;
        
        head = NULL ;
        tail = NULL;

        delete temp ;
    }
    else
    {
        struct node<T> * temp = NULL ; 
        struct node<T> * tempDelete = NULL ;
        temp = head;

        while(temp->next != tail)
        {
            temp = temp->next ;
        }

        tempDelete = tail;
        temp->next = head;
        tail = temp;
        delete tempDelete ;

        iCount--;
    }
}

template <class T>
void SinglyCLL<T>::DeleteAtPos(int iPos)
{
    if((iPos <= 0) || (iPos > iCount))
    {
        cout<<"Invalid Position" ;
        return ;
    }
    else if(iPos == 1)
    {
        DeleteFirst() ;
        return;
    }
    else if(iPos == iCount)
    {
        DeleteLast() ;
        return;
    }
    else
    {
        struct node<T> * temp = NULL ; 
        struct node<T> * tempDelete = NULL ;
        temp = head;

        for(int iCnt = 1 ; iCnt <= (iPos - 2) ; iCnt++)
        {
            temp = temp->next;
        }

        tempDelete = temp->next;
        temp->next = temp->next->next ;
        delete tempDelete ;

        tail->next = head ;
        iCount--;
    }
}

template <class T>
void SinglyCLL<T>::Display()
{
    if(iCount== 0)
    {
        cout<<"Linked-List is Empty"<<endl ;
        return;
    }
    else if(iCount == 1) 
    {
        cout<<"|"<<head->data<<"|"<<endl ;
        return;
    }
    else
    {
        struct node<T> * temp = NULL ;
        temp = head ;

        do
        {
            cout<<'|'<<temp->data<<"|->" ;
            temp = temp->next ;
        }while(temp != head) ;

        cout<<endl ;   
    }

}

template<class T>
int SinglyCLL<T>::Count()
{
    return iCount ;
}

int main()
{
    int iRet = 0;

    SinglyCLL <int>sobj ;
    sobj.InsertFirst(51);
    sobj.InsertFirst(21);
    sobj.InsertFirst(11) ;
    sobj.InsertLast(75);
    sobj.InsertLast(101);
    sobj.InsertAtPos(69 , 4) ;

    //sobj.DeleteFirst();
    //sobj.DeleteLast() ;
    sobj.DeleteAtPos(4) ;

    sobj.Display() ;
    iRet = sobj.Count() ;
    cout<<"Number of Nodes are : "<<iRet<<endl ;

    return 0 ;
}