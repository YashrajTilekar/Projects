#include<iostream>
using namespace std ;

template<class T>
struct node
{
    T data ;
    struct node * next ;
} ;

typedef struct node NODE ;
typedef struct node * PNODE ;

template<class T>
class SinglyCircularLinkedList
{
    public:
        int iCount ;
        struct node<T> * head ;
        PNODE tail ;

        SinglyCircularLinkedList() ;
        void InsertFirst(int);
        void InsertLast(int);
        void InsertAtPos(int , int) ;
        void DeleteFirst();
        void DeleteLast();
        void DeleteAtPos(int);
        int Count();
        void Display();
};

template<class T>
SinglyCircularLinkedList::SinglyCircularLinkedList()
{
    head = NULL ;
    tail = NULL ;
    iCount = 0 ;
}

template<class T>
void SinglyCircularLinkedList::InsertFirst(int No)
{
    PNODE newn = NULL ;
    newn = new NODE ;

    newn->data = No ;
    newn->next = NULL;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
    }
    else
    {
        newn->next = head; 
        head = newn;
    }

    tail->next = head;
    iCount++;
}

template<class T>
void SinglyCircularLinkedList::InsertLast(int No)
{
    PNODE newn = NULL ;
    newn = new NODE ;

    newn->data = No ;
    newn->next = NULL;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
    }
    else
    {
        newn->next = head ;
        tail->next = newn ;
        tail = newn ;
    }

    tail->next = head;
    iCount++;
}

template<class T>
void SinglyCircularLinkedList::InsertAtPos(int No , int iPos)
{
    if((iPos < 1) || (iPos > iCount+1))
    {
        cout<<"Invalid Position"<<endl ;
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
        return ;
    }
    else
    {
        PNODE newn = NULL ;
        newn = new NODE ;

        newn->data = No;
        newn->next = NULL ;

        PNODE temp = NULL ;
        temp = head;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next;
        }

        newn->next = temp->next ;
        temp->next = newn ;

        iCount++;
    }
}

template<class T>
void SinglyCircularLinkedList::DeleteFirst()
{
    if(iCount == 0)
    {
        return ;
    }
    else if(iCount == 1)
    {
        delete head ;
        head = NULL ;
        tail = NULL ;
    }
    else
    {
        PNODE tempdelete = NULL ;
        tempdelete = head ;

        head = head->next ;
        delete tempdelete ;
    }

    iCount-- ;
    tail->next = head; 
}

template<class T>
void SinglyCircularLinkedList::DeleteLast()
{
    if(iCount == 0)
    {
        return ;
    }
    else if(iCount == 1)
    {
        delete tail ;
        head = NULL ;
        tail = NULL ;
    }
    else
    {
        PNODE temp = NULL ;
        temp = head ;

        while(temp->next != tail)
        {
            temp = temp->next ;
        }

        tail = temp ;
        delete tail->next ;
        tail->next = head ;
    }

    iCount-- ;
    tail->next = head; 
}

template<class T>
void SinglyCircularLinkedList::DeleteAtPos(int iPos)
{
    if((iPos < 1) || (iPos > iCount))
    {
        cout<<"Invalid Position"<<endl ;
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
        return ;
    }
    else
    {
        PNODE temp = NULL ;
        PNODE tempdelete = NULL;

        temp = head;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next;
        }

        tempdelete = temp->next ;
        temp->next = temp->next->next ;
        delete tempdelete ;

        iCount--;
    }
}

template<class T>
void SinglyCircularLinkedList::Display()
{
    PNODE temp = NULL ;
    temp = head ;

    do
    {
        cout<<"|"<<temp->data<<"|->" ;
        temp = temp->next ;
    }while(temp != head) ;
    
    cout<<endl ;
} 

template<class T>
int SinglyCircularLinkedList::Count()
{
    return iCount ;
}

int main()
{
    SinglyCircularLinkedList sobj ;
    int iRet = 0 ;

    sobj.InsertFirst(21) ;
    sobj.InsertFirst(11);

    sobj.InsertLast(51);
    sobj.InsertLast(101);

    sobj.InsertAtPos(35 , 3); 

    //sobj.DeleteFirst();
    //sobj.DeleteLast();

    sobj.DeleteAtPos(3);
    
    sobj.Display();
    iRet = sobj.Count() ;
    cout<<"Number of Nodes are : "<<iRet<<endl ;

    return 0 ;
}