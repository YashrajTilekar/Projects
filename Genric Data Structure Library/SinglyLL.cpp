// Generic Data Structure Library
//Singly Linear Linked List

#include<iostream>
using namespace std ;

////////////////////////////////////////////////////////////////////////////////
template<class T>
struct node
{
    T data ;
    struct node *next ;
};
////////////////////////////////////////////////////////////////////////////////
template<class T>
class SinglyLinearLinkedList
{
    public:
    struct node<T> *head ;                  //Characteristics
    int iCount ;

    SinglyLinearLinkedList() ;             //Behaviours
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
SinglyLinearLinkedList<T>::SinglyLinearLinkedList()
{
    head = NULL ;
    iCount = 0 ;
}

template<class T>
void SinglyLinearLinkedList<T>::InsertFirst(T no)
{
    struct node<T> *newn = NULL ;

    newn = new node<T> ;
    newn->data = no ;
    newn->next = NULL ;

    if(head == NULL)
    {
        head = newn ;
    } 
    else
    {
        newn->next = head ;
        head = newn ;
    }

    iCount++ ;
}

template<class T>
void SinglyLinearLinkedList<T>::InsertLast(T no)
{
    struct node<T> *newn = NULL ;
    
    newn = new node<T> ;
    newn->data = no ;
    newn->next = NULL ;

    if(head == NULL)
    {
        head = newn ;
    }
    else
    {
        struct node<T> *temp = NULL ;
        temp = head ;

        while(temp->next != NULL)
        {
            temp = temp->next ;
        }

        temp->next = newn ;
    }

    iCount++ ;
}

template<class T>
void SinglyLinearLinkedList<T>::InsertAtPos(T no ,int iPos)
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
        struct node<T> * newn = NULL;
        struct node<T> * temp = head;

        newn = new node<T> ;

        newn->data = no;
        newn->next = NULL;
        
        for(int iCnt = 0 ; iCnt<(iPos - 2) ;iCnt++)
        {
            temp = temp->next;
        }
        
        newn->next = temp->next;
        temp->next = newn;

        iCount ++;
    }
}

template<class T>
void SinglyLinearLinkedList<T>::DeleteFirst()
{
    if(head == NULL)
    {
        return;
    }
    else
    {
        struct node<T> * temp = NULL;
        temp = head;

        head = head->next ;

        free(temp); 
    }

    iCount--;
}

template<class T>
void SinglyLinearLinkedList<T>::DeletaLast()
{
    if(head == NULL)
    {
        return;
    }
    else
    {
        struct node<T> * temp = head ;

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
void SinglyLinearLinkedList<T>::DeleteAtPos(int iPos)
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
        struct node<T> * temp = head;
        struct node<T> * tempDelete = NULL;

        for(int iCnt = 0 ; iCnt<(iPos - 2) ;iCnt++)
        {
            temp = temp->next;
        }

        tempDelete = temp->next;
        temp->next = temp->next->next;
        free(tempDelete);

        iCount --;
    }
}

template<class T>
void SinglyLinearLinkedList<T>::Display()
{
    struct node<T> *temp = head ;

    cout<<"Elements of Linked List ar :"<<endl ;

    while(temp != NULL)
    {
        cout<<"|"<<temp->data<<"|->" ;

        temp = temp->next ;
    }
    cout<<"NULL"<<endl ;
}

template<class T>
int SinglyLinearLinkedList<T>::Count()
{
    return iCount ;
}
////////////////////////////////////////////////////////////////////////////////

int main()
{
    SinglyLinearLinkedList <int>sobj ;
    int iRet = 0;

    sobj.InsertFirst(101) ;
    sobj.InsertFirst(51) ;
    sobj.InsertFirst(21) ;
    sobj.InsertFirst(11) ;

    sobj.InsertLast(125) ;

    sobj.InsertAtPos(70,4);

    //sobj.DeleteFirst();
    //sobj.DeletaLast();
    //sobj.DeleteAtPos(6);

    sobj.Display() ;    
    iRet = sobj.Count();
    cout<<"Number of Nodes are :"<<iRet<<endl;

    return 0;
}