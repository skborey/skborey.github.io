# Object Oriented Programming

**How to alias a property from an interface to a different name based on the implementation type name:**

```typescirpt
interface Machine { base: number; }
interface MachineA implement Machine { startPoint: number; }
interface MachineB implement Machine { rootLevel: number; }
```
