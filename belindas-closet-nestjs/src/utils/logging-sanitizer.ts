/**
 * Utility functions for sanitizing sensitive data in logs
 */

export interface SanitizedUser {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  // Removed sensitive fields: password, resetPasswordToken, etc.
}

export interface SanitizedProduct {
  id: string;
  productType: string;
  productGender?: string;
  productSizes?: string;
  productDescription?: string;
  // Keep user info minimal
  createdByUserId?: string;
  updatedByUserId?: string;
}

/**
 * Sanitizes user object for logging by removing sensitive fields
 */
export function sanitizeUserForLogging(user: any): SanitizedUser {
  if (!user) return null;
  
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: maskEmail(user.email),
    role: user.role,
  };
}

/**
 * Sanitizes product object for logging by removing sensitive user data
 */
export function sanitizeProductForLogging(product: any): SanitizedProduct {
  if (!product) return null;
  
  return {
    id: product.id,
    productType: product.productType,
    productGender: product.productGender,
    productSizes: product.productSizes,
    productDescription: product.productDescription,
    createdByUserId: product.createdByUser?.id || product.created_by_user_id,
    updatedByUserId: product.updatedByUser?.id || product.updated_by_user_id,
  };
}

/**
 * Masks email address for logging (shows only first char and domain)
 */
export function maskEmail(email: string): string {
  if (!email) return '';
  
  const [localPart, domain] = email.split('@');
  if (!domain) return email; // Invalid email format
  
  const maskedLocal = localPart.charAt(0) + '*'.repeat(Math.max(0, localPart.length - 1));
  return `${maskedLocal}@${domain}`;
}

/**
 * Generic function to remove sensitive fields from any object
 */
export function removeSensitiveFields(obj: any, sensitiveFields: string[] = []): any {
  if (!obj) return obj;
  
  const defaultSensitiveFields = [
    'password',
    'resetPasswordToken',
    'resetPasswordExpires',
  ];
  
  const fieldsToRemove = [...defaultSensitiveFields, ...sensitiveFields];
  const sanitized = { ...obj };
  
  fieldsToRemove.forEach(field => {
    delete sanitized[field];
  });
  
  return sanitized;
}

/**
 * Sanitizes any object for safe logging
 */
export function sanitizeForLogging(data: any): any {
  if (!data) return data;
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForLogging(item));
  }
  
  if (typeof data === 'object') {
    // If it looks like a user object
    if (data.email && data.password) {
      return sanitizeUserForLogging(data);
    }
    
    // If it looks like a product object
    if (data.productType) {
      return sanitizeProductForLogging(data);
    }
    
    // Generic object sanitization
    return removeSensitiveFields(data);
  }
  
  return data;
}
