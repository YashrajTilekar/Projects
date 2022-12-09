// Generic Data Structure Library
//Doubly Linear Linked List

#include<iostream>
using namespace std ;
////////////////////////////////////////////////////////////////////////////////
template<class T>
struct node2
{
    T data ;
    struct node2 *next ;
    struct node2 *previous;
};
////////////////////////////////////////////////////////////////////////////////
template<class T>
class DoublyLinearLinkedList
{
    public:
    struct node2<T> *head ;                  //Characteristics
    int iCount ;

    DoublyLinearLinkedList() ;             //Behaviours
    void InsertFirst(T no) ;
    void InsertLast(T no) ;
    void InsertAtPos(T no ,int iPos) ;
    void DeleteFirst() ;
    void DeletaLast() ;
    void DeleteAtPos(int iPos) ;
    void Display() ;
    int Count() ;
};

template<class T>
DoublyLinearLinkedList<T>::DoublyLinearLinkedList()
{
    head = NULL ;
    iCount = 0 ;
}

template<class T>
void DoublyLinearLinkedList<T>::InsertFirst(T no)
{
    struct node2<T> *newn = NULL ;

    newn = new node2<T> ;
    newn->data = no ;
    newn->next = NULL ;
    newn->previous = NULL;

    if(head == NULL)
    {
        head = newn ;
    } 
    else
    {
        newn->next = head ;
        head->previous = newn;
        head = newn ;
    }

    iCount++ ;
}

template<class T>
void DoublyLinearLinkedList<T>::InsertLast(T no)
{
    struct node2<T> *newn = NULL ;
    
    newn = new node2<T> ;
    newn->data = no ;
    newn->next = NULL ;
    newn->previous = NULL;

    if(head == NULL)
    {
        head = newn ;
    }
    else
    {
        struct node2<T> *temp = NULL ;
        temp = head ;

        while(temp->next != NULL)
        {
            temp = temp->next ;
        }

        temp->next = newn ;
        newn->previous = temp;
    }

    iCount++ ;
}

template<class T>
void DoublyLinearLinkedList<T>::InsertAtPos(T no ,int iPos)
{
    if((iPos > iCount+1) || (iPos <= 0))
    {
        cout<<"Invalid Position"<<endl;
        return;
    }
    else if(iPos == 1)
    {
        InsertFirst(no);

        return;
    }
    else if(iPos == (iCount + 1))
    {
        InsertLast(no);

        return;
    }
    else
    {
        struct node2<T> * newn = NULL;
        struct node2<T> * temp = head;

        newn = new node2<T> ;

        newn->data = no;
        newn->next = NULL;
        newn->previous = NULL;
        
        for(int iCnt = 0 ; iCnt<(iPos - 2) ;iCnt++)
        {
            temp = temp->next;
        }
        
        newn->next = temp->next;
        newn->previous = temp;
        temp->next = newn;

        iCount ++;
    }
}

template<class T>
void DoublyLinearLinkedList<T>::DeleteFirst()
{
    if(head == NULL)
    {
        return;
    }
    else
    {
        struct node2<T> * temp = NULL;
        temp = head;

        head = head->next ;
        head->previous = NULL;

        free(temp); 
    }

    iCount--;
}

template<class T>
void DoublyLinearLinkedList<T>::DeletaLast()
{
    if(head == NULL)
    {
        return;
    }
    else
    {
        struct node2<T> * temp = head ;

        while(temp->next->next != NULL)
        {
            temp = temp->next;
        }

        free(temp->next) ;
        temp->next = NULL;

    }

    iCount--;
}

template<class T>
void DoublyLinearLinkedList<T>::DeleteAtPos(int iPos)
{
    if((iPos > iCount) || (iPos <= 0))
    {
        cout<<"Invalid Position"<<endl;
        return;
    }
    else if(iPos == 1)
    {
        DeleteFirst();

        return;
    }
    else if(iPos == iCount)
    {
        DeletaLast();

        return;
    }
    else
    {
        struct node2<T> * temp = head;
        struct node2<T> * tempDelete = NULL;

        for(int iCnt = 0 ; iCnt<(iPos - 2) ;iCnt++)
        {
            temp = temp->next;
        }

        tempDelete = temp->next ;
        temp->next = temp->next->next;
        temp->next->previous = temp;
        free(tempDelete) ;  

        iCount --;
    }
}

template<class T>
void DoublyLinearLinkedList<T>::Display()
{
    struct node2<T> *temp = head ;

    cout<<"Elements of Linked List are :"<<endl ;
    cout<<"NULL<=>";
    while(temp != NULL)
    {
        cout<<"|"<<temp->data<<"|<=>" ;

        temp = temp->next ;
    }
    cout<<"NULL"<<endl ;
}

template<class T>
int DoublyLinearLinkedList<T>::Count()
{
    return iCount ;
}
////////////////////////////////////////////////////////////////////////////////

int main()
{
    DoublyLinearLinkedList <int>sobj ;
    int iRet = 0;

    sobj.InsertFirst(101) ;
    sobj.InsertFirst(51) ;
    sobj.InsertFirst(21) ;
    sobj.InsertFirst(11) ;

    sobj.InsertLast(125) ;

    sobj.InsertAtPos(70,4);

    //sobj.DeleteFirst();
    //sobj.DeletaLast();
    sobj.DeleteAtPos(4);

    sobj.Display() ;    
    iRet = sobj.Count();
    cout<<"Number of node2s are :"<<iRet<<endl;

    return 0;
}