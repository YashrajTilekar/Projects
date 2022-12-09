#include<iostream>
using namespace std;

///////////////////////////////////////////////////////////////////////////////////////////

template <class T>
struct node
{
    T data ;
    struct node * next ;
};

///////////////////////////////////////////////////////////////////////////////////////////

template<class T>
struct node2
{
    T data ;
    struct node2 *next ;
    struct node2 *previous;
};

///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////

template<class T>
class DoublyCLL
{
    public :
        int iCount ;
        struct node2<T> * head ;
        struct node2<T> * tail ;

        DoublyCLL() ;
        void InsertFirst(T) ;
        void InsertLast(T) ;
        void InsertAtPos(T , int) ;
        void DeleteFirst() ;
        void DeleteLast() ;
        void DeleteAtPos(int) ;
        int Count() ;
        void Display() ;
        void DisplayReverse() ;
};

template<class T>
DoublyCLL<T>::DoublyCLL()
{
    iCount = 0 ;
    head = NULL ;
    tail = NULL ;
}

template<class T>
void DoublyCLL<T>::InsertFirst(T No)
{
    struct node2<T> * newn = NULL ;
    newn = new node2<T> ;

    newn->data = No ;
    newn->next = NULL;
    newn->previous = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
        head->previous = tail;
    }
    else
    {
        newn->next = head;
        head->previous = newn ;
        newn->previous = tail;

        head = newn ;
    }

    head->previous = tail;
    tail->next = head ;
    iCount++ ;
}

template<class T>
void DoublyCLL<T>::InsertLast(T No)
{
    struct node2<T> * newn = NULL ;
    newn = new node2<T> ;

    newn->data = No ;
    newn->next = NULL;
    newn->previous = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
        head->previous = tail;
    }
    else
    {
        newn->next = head ;
        newn->previous = tail ;

        tail->next = newn ;
        tail = newn ;
    }

    head->previous = tail;
    tail->next = head ;
    iCount++ ;
}

template<class T>
void DoublyCLL<T>::InsertAtPos(T No , int iPos)
{
    if((iPos < 1) || (iPos > iCount+1))
    {
        cout<<"Ivalid Position"<<endl ;
        return ;
    }
    else if(iPos == 1)
    {
        InsertFirst(No) ;
        return ;
    }
    else if(iPos == iCount + 1)
    {
        InsertLast(No);
        return ;
    }
    else
    {
        struct node2<T> * newn = NULL ;
        newn = new node2<T> ;

        struct node2<T> * temp = NULL;
        temp = head;

        newn->data = No ;
        newn->next = NULL ;
        newn->previous = NULL ;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next ;
        }

        newn->next = temp->next ;
        newn->previous = temp ;

        temp->next->previous = newn ;
        temp->next = newn ;

        tail->next = head ;
        head->previous = tail;
        iCount++;
    }
}

template<class T>
void DoublyCLL<T>::DeleteFirst()
{
    if((head == NULL) && (tail == NULL))
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
        head = head->next ;
        delete head->previous ;
        head->previous = tail ;
        tail->next = head ;
    }

    iCount--;
}

template<class T>
void DoublyCLL<T>::DeleteLast()
{
    if((head == NULL) && (tail == NULL))
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
        tail = tail->previous ;
        delete tail->next ;
        tail->next = head ;
        head->previous = tail ;
    }

    iCount--;
}

template<class T>
void DoublyCLL<T>::DeleteAtPos(int iPos)
{
    if((iPos < 1) || (iPos > iCount))
    {
        cout<<"Ivalid Position"<<endl ;
        return ;
    }
    else if(iPos == 1)
    {
        DeleteFirst() ;
        return ;
    }
    else if(iPos == iCount)
    {
        DeleteLast();
        return ;
    }
    else
    {
        struct node2<T> * temp = NULL;
        temp = head;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next ;
        }

        temp->next = temp->next->next ;
        delete temp->next->previous ;
        temp->next->previous = temp;
       
        tail->next = head ;
        head->previous = tail;
        iCount--;
    }
}

template<class T>
void DoublyCLL<T>::Display()
{
    struct node2<T> * temp = NULL ;
    temp = head ;

    do
    {
        cout<<"|"<<temp->data<<"|<=>" ;
        temp = temp->next ;
    }while(temp != head) ;

    cout<<endl ;
}

template<class T>
void DoublyCLL<T>::DisplayReverse()
{
    struct node2<T> * temp = NULL ;
    temp = tail ;

    do
    {
        cout<<"|"<<temp->data<<"|<=>" ;
        temp = temp->previous ;
    }while(temp != tail) ;

    cout<<endl ;
}

template<class T>
int DoublyCLL<T>::Count()
{
    return iCount;
}

///////////////////////////////////////////////////////////////////////////////////////////

template<class T>
class Stack
{
    public:
    struct node<T> *head ;                  //Characteristics
    int iCount ;

    Stack() ;                               //Behaviours
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

///////////////////////////////////////////////////////////////////////////////////////////

template<class T>
class Queue
{
 	public:
		struct node<T> * head ;
		struct node<T> * tail ;
		int iCount ;

		Queue() ;
		void enQueue(int No) ;
		void deQueue() ;
		void Display();
		int Count();
};

template<class T>
Queue<T>::Queue()
{
	head = NULL ;
	tail = NULL ;
	iCount = 0 ;
}

template<class T>
void Queue<T>::enQueue(int No)
{
	struct node<T> * newn = NULL ;
	newn = new node<T> ;

	newn->data = No ;
	newn->next = NULL ;

	if((head == NULL) && (tail == NULL))
	{
		head = newn ;
		tail = newn ;
	}
	else
	{
		newn->next = tail ;
		tail = newn ;
	}

	iCount++;
}

template<class T>
void Queue<T>::deQueue()
{
	if((head == NULL) && (tail == NULL))
	{
		return ;
	}
	else if(iCount == 1)
	{
		delete head;
		head = NULL ;
		tail = NULL ;
	}
	else
	{
		struct node<T> * temp = tail ;
		while(temp->next != head)
		{
			temp = temp->next ;
		}

		head = temp ;
		delete head->next ;
		head->next = NULL;
	}

	iCount--;
}

template<class T>
void Queue<T>::Display()
{
	struct node<T> * temp = tail ;

	while(temp != NULL)
	{
		cout<<"|"<<temp->data<<"|->";
		temp = temp->next ;
	}
	cout<<"NULL"<<endl;
}

template<class T>
int Queue<T>::Count()
{
	return iCount ;
}

///////////////////////////////////////////////////////////////////////////////////////////