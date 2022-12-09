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
class Stack
{
    public:
    struct node<T> *head ;                  //Characteristics
    int iCount ;

    Stack() ;             //Behaviours
    void Push(T no) ;
    void Pop() ;
    void Display() ;
    void Peek() ;
    int Count() ;
};

template<class T>
Stack<T>::Stack()
{
    head = NULL ;
    iCount = 0 ;
}

template<class T>
void Stack<T>::Push(T no)
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
void Stack<T>::Pop()
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
void Stack<T>::Display()
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
void Stack<T>::Peek()
{
    cout<<head->data<<endl ;
} 

template<class T>
int Stack<T>::Count()
{
    return iCount ;
}
////////////////////////////////////////////////////////////////////////////////

int main()
{
    SinglyLinearLinkedList <int>sobj ;
    int iRet = 0;

    sobj.Push(101) ;
    sobj.Push(51) ;
    sobj.Push(21) ;
    sobj.Push(11) ;

    sobj.Pop
    ();

    sobj.Display() ;    
    iRet = sobj.Count();
    cout<<"Number of Nodes are :"<<iRet<<endl;

    return 0;
}